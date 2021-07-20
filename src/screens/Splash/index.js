import React, {useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
//Externas
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
import BarberLogo from '../../assets/barber.svg';
//Api
import Api from '../../Api';
//styles
import {Container, Loading} from './styles';
const Splash = () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let json = await Api.checkToken(token);
        if (json.token) {
          //salvando token
          await AsyncStorage.setItem('token', json.token);
          //salvando no CONTEXTAPI
          userDispatch({
            type: 'setAvatar',
            payload: {avatar: json.data.avatar},
          });
          navigation.reset({
            routes: [{name: 'Tab'}],
          });
        } else {
          navigation.navigate('Login');
        }
        navigation.reset({
          routes: [{name: 'Tab'}],
        });
      } else {
        navigation.navigate('Login');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <Loading size="large" color="#f0f0f0" />
    </Container>
  );
};
export default Splash;
