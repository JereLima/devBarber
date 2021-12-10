import React, {useEffect, useState, useContext} from 'react';
import {Platform, RefreshControl, PermissionsAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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

import {
  Container,
  HeaderArea,
  Title,
  SearchArea,
  LocationArea,
  LocalButton,
  Scrooler,
  ListArea,
} from './styles';

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
