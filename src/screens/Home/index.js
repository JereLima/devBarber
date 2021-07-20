import React, {useEffect, useState, useContext} from 'react';
import {
  ScrollView,
  Text,
  Platform,
  SectionList,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  PermissionsAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {UserContext} from '../../contexts/UserContext';
import Geolocation from '@react-native-community/geolocation';
//Components
import TextInputComponent from '../../components/TextInput';
import BarberComponent from '../../components/BarberComponent';
import LoadingComponent from '../../components/Loading';
//Imagens/svgs
import SearchIcon from '../../assets/search.svg';
import LocalIcon from '../../assets/my_location.svg';
//api
import Api from '../../Api';
import ModalComponent from '../../components/ModalComponent';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const HeaderArea = styled.View`
  width: 100%;
  height: 150px;
  background-color: #4eadbe;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 28px;
  font-family: Roboto;
  color: #f0f0f0;
`;
export const SearchArea = styled.TouchableOpacity``;
export const LocationArea = styled.View`
  width: 95%;
  background-color: #4eadbe;
  align-self: center;
  align-items: center;
  margin-top: 20px;
  height: 60px;
  border-radius: 10px;
  justify-content: space-evenly;
  flex-direction: row;
  padding-right: 20px;
`;
export const LocalText = styled.Text`
  font-size: 20px;
  border-radius: 20px;
  font-family: Roboto;
  color: #f0f0f0;
`;
export const LocalButton = styled.TouchableOpacity``;
export const Scrooler = styled.ScrollView`
  width: 100%;
`;
export const Loading = styled.ActivityIndicator`
  margin-top: 30px;
`;
export const ListArea = styled.View`
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const Home = () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [locationText, setLocationText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [coords, setCoords] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [titleModal, setTitleModal] = useState('Atenção');
  const [textModal, setTextModal] = useState(textModalExample);

  const textModalExample =
    'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
  useEffect(() => {
    getBarbersList();
  }, []);

  const getBarbersList = async () => {
    setLoading(true);
    setList([]);
    location();

    let lat = null;
    let lng = null;

    if (coords !== '') {
      lat = coords.latitude;
      lng = coords.longitude;
    }

    const res = await Api.getBarbers(lat, lng, locationText);

    if (res.error === '') {
      console.log('Hoooome');
      setLocationText(res.loc);
      setList(res.data);
    } else {
      console('Erro ', res.error);
    }
    setLoading(false);
  };

  const location = () => {
    if (Platform.OS === 'ios') {
      getGeolocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Localização',
            message: 'Precisamos acessar o local',
            buttonNeutral: 'perguntar depois',
            buttonNegative: 'cancelar',
            buttonPositive: 'OK',
          },
          {enableHighAccuracy: true, timeout: 2000, maximumAge: 10000},
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getGeolocation();
        } else {
        }
      };
      requestLocationPermission();
    }
  };

  const getGeolocation = async () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCoords(position.coords);
        //getBarbersList();
      },
      (error) => {
        console.log('error.code,', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const handleLocationSearch = () => {
    setCoords({});
    getBarbersList();
  };

  return (
    <Container>
      {loading && <LoadingComponent textLoading="Buscando Barbeiros" />}
      {/* {isVisible && (
        <ModalComponent
          show={isVisible}
          titleModal={titleModal}
          textModal={textModalExample}
          setShow={setIsVisible}
        />
      )} */}
      <Scrooler
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getBarbersList} />
        }>
        <HeaderArea>
          <Title numberOfLines={3}>Encontre seu {'\n'}barbeiro favorito</Title>
          <SearchArea onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="50" height="50" fill="#f0f0f0" />
          </SearchArea>
        </HeaderArea>
        <LocationArea>
          <TextInputComponent
            value={locationText}
            onChangeText={(t) => setLocationText(t)}
            placeholder="Onde você está?"
            onEndEditing={handleLocationSearch}
          />
          <LocalButton onPress={() => location()}>
            <LocalIcon width="30" fill="#f0f0f0" />
          </LocalButton>
        </LocationArea>
        <ListArea>
          {list.map((item, key) => (
            <BarberComponent key={key} data={item} />
          ))}
        </ListArea>
      </Scrooler>
    </Container>
  );
};
export default Home;
