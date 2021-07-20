import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Api from '../../Api';
import Swiper from 'react-native-swiper';
import ButtonComponent from '../../components/ButtonComponent';
import StarsComponent from '../../components/StarsComponent/';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteIconFull from '../../assets/favorite_full.svg';
import BackButtonIcon from '../../assets/back.svg';
import LoadingComponent from '../../components/Loading';
import PrevButtonIcon from '../../assets/nav_prev.svg';
import NextButtonIcon from '../../assets/nav_next.svg';
import ModalSchedulingComponent from '../../components/ModalSchedulingComponent';

import {View, Text} from 'react-native';

const Details = (props) => {
  const navigation = useNavigation('');
  const route = useRoute();
  //
  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [serviceSelected, setServiceSelected] = useState();

  useEffect(() => {
    setLoading(true);
    const getBarberInfo = async () => {
      await Api.getBarber(userInfo.id)
        .then((data) => {
          setUserInfo(data.data);
          setFavorited(data.data.favorited);
          setLoading(false);
        })
        .catch((err) => console.log('Error', err.erro));
    };
    getBarberInfo();
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleFavClick = () => {
    setFavorited(!favorited);
    Api.setFavorite(userInfo.id);
  };

  const handleModalServiceOpen = (service) => {
    setServiceSelected(service);
    setModalVisible(true);
  };

  return (
    <Container>
      {loading && (
        <LoadingComponent TextLoading="Carregando dados do Barbeiro" />
      )}
      <Scroll>
        <ProfileFavorite onPress={() => handleFavClick()}>
          {favorited ? (
            <FavoriteIconFull width="40" height="40" fill="#ff0000" />
          ) : (
            <FavoriteIcon width="40" height="40" fill="#aaa" />
          )}
        </ProfileFavorite>
        <BackButton onPress={handleBackButton}>
          <BackButtonIcon width="45" height="45" fill="#f0f0f0" />
        </BackButton>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            height={300}
            style={{heigth: 240}}
            autoplay={true}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: item.url}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper />
        )}
        <PageBody>
          <ImageView>
            <ImageProfile source={{uri: userInfo.avatar}} resizeMode="cover" />
          </ImageView>
          <ProfileData>
            <UserName>{userInfo.name}</UserName>
            <StarsComponent stars={userInfo.stars} showNumber={true} />
          </ProfileData>
          {userInfo.services ? (
            <BarberServices>
              <TextListOfServices>Lista de Serviços</TextListOfServices>
              {userInfo.services.map((item, key) => (
                <ServicesView key={key}>
                  <View style={{width: '50%', justifyContent: 'center'}}>
                    <ServicesText>{item.name}</ServicesText>
                    <ServicesPrice>R${item.price}</ServicesPrice>
                  </View>
                  <ButtonComponent
                    title="Agendar"
                    width="40%"
                    backgroundColor="#63c2d1"
                    height="50px"
                    onPress={() => handleModalServiceOpen(key)}
                  />
                </ServicesView>
              ))}
            </BarberServices>
          ) : (
            <BarberServices>
              <Text />
            </BarberServices>
          )}
          {userInfo.testimonials ? (
            <TestimonialArea>
              <Swiper
                containerStyle={{justifyContent: 'center'}}
                autoplay={true}
                height={110}
                showsPagination={false}
                showsButtons={true}
                prevButton={
                  <PrevButtonIcon width="35" height="35" fill="#000" />
                }
                nextButton={
                  <NextButtonIcon width="35" height="35" fill="#000" />
                }>
                {userInfo.testimonials.map((item, key) => (
                  <TestimonialsView key={key}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <TestimonialText>{item.name}</TestimonialText>
                      <StarsComponent stars={item.rate} />
                    </View>
                    <TestimonialMessage>:{item.body}</TestimonialMessage>
                  </TestimonialsView>
                ))}
              </Swiper>
            </TestimonialArea>
          ) : (
            <Text />
          )}
          <ModalSchedulingComponent
            setShow={setModalVisible}
            show={modalVisible}
            user={userInfo}
            service={serviceSelected}
          />
        </PageBody>
      </Scroll>
    </Container>
  );
};
export default Details;

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
export const FakeSwiper = styled.View`
  background-color: #ddd;
  height: 300px;
`;
export const PageBody = styled.View`
  background-color: white;
  border-top-left-radius: 50px;
  align-items: center;
  margin-top: -50px;
`;
export const ImageView = styled.View`
  margin-bottom: -50px;
  align-self: flex-start;
  background-color: blueviolet;
  border-radius: 10px;
  top: -75px;
  left: 10%;
  height: 150px;
  width: 150px;
`;
export const ImageProfile = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 3px solid white;
`;
export const BarberServices = styled.View`
  padding: 5% 5%;
  border-radius: 20px;
  width: 90%;
  align-items: flex-start;
  background-color: white;
`;
export const TextTest = styled.Text`
  color: white;
`;
export const SwipeDotActive = styled.View`
  width: 20px;
  height: 10px;
  border-radius: 5px;
  background-color: #63c2d1;
`;
export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #aaa;
  margin: 5px;
`;
export const SwipeItem = styled.View`
  height: 300px;
  background-color: #63c2d1;
`;
export const SwipeImage = styled.Image`
  width: 100%;
  height: 300px;
`;
export const LoadingView = styled.View`
  background-color: #aaaa;
`;
export const TextLoading = styled.Text`
  font-size: 20px;
`;
export const ServicesView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const ServicesText = styled.Text`
  font-size: 20px;
  color: #63c2d1;
  font-weight: bold;
`;
export const ServicesPrice = styled.Text`
  font-size: 20px;
  color: #63c2d1;
`;
export const ScrollAssessments = styled.ScrollView`
  margin-top: 20px;
  background-color: white;
  width: 90%;
`;
export const TestimonialsView = styled.View`
  background-color: darkblue;
  height: 100px;
  margin: 0px 50px;
  border-radius: 20px;
  padding: 10px;
`;
export const ProfileData = styled.View`
  height: 80px;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 10px;
  width: 50%;
`;
export const UserName = styled.Text`
  font-size: 25px;
  color: black;
  font-weight: bold;
`;
export const ProfileFavorite = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 200px;
  justify-content: center;
  align-items: center;
`;
export const TestimonialArea = styled.View`
  width: 90%;
  padding-top: 20px;
  margin-bottom: 20px;
`;
export const TextListOfServices = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #63c2d0;
  margin-bottom: 20px;
`;
export const BackButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #0003;
  position: absolute;
  justify-content: center;
  top: 20px;
  left: 20px;
  z-index: 1;
`;
export const TestimonialText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
export const TestimonialMessage = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
export const ModalView = styled.View`
  background-color: transparent;
  align-self: center;
  margin-top: 40%;
  height: 60%;
  width: 100%;
  justify-content: flex-end;
`;
