import React, {useState, useEffect} from 'react';
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
import {
  Container,
  Scroll,
  FakeSwiper,
  PageBody,
  ImageView,
  ImageProfile,
  BarberServices,
  SwipeDotActive,
  SwipeDot,
  SwipeItem,
  SwipeImage,
  ServicesView,
  ServicesText,
  ServicesPrice,
  TestimonialArea,
  TestimonialsView,
  ProfileData,
  UserName,
  ProfileFavorite,
  TextListOfServices,
  BackButton,
  TestimonialText,
  TestimonialMessage,
} from './styles';

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
