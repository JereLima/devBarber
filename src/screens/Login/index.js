import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
//Components
import TextInputComponent from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';
import Loading from '../../components/Loading';
import ModalComponent from '../../components/ModalComponent';
//Imagens/svgs
import BarberLogo from '../../assets/barber.svg';
//api
import Api from '../../Api';
import {UserReducer} from '../../reducers/UserReducer';
import {Container} from './styles';

const Login = () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [titleModal, setTitleModal] = useState('Atenção');
  const [textModal, setTextModal] = useState('');

  const handleLogin = async () => {
    console.log('entrou');
    if (email && password) {
      setLoading(true);
      let json = await Api.signIn(email, password);
      if (json.token) {
        //salvando token
        console.log('Login', json);
        await AsyncStorage.setItem('token', json.token);
        console.log('Login', json.data);
        userDispatch({
          type: 'setUser',
          payload: {user: json.data},
        });
        //salvando no CONTEXTAPI
        userDispatch({
          type: 'setAvatar',
          payload: {avatar: json.data.avatar},
        });
        navigation.reset({
          routes: [{name: 'Tab'}],
        });
        setLoading(false);
      } else {
        setLoading(false);
        setTextModal('Email ou Senha incorretos');
        setIsVisible(true);
      }
    } else {
      setLoading(false);
      alert('faltando');
    }
  };
  return (
    <Container>
      <ModalComponent
        show={isVisible}
        setShow={setIsVisible}
        titleModal={titleModal}
        textModal={textModal}
      />
      {loading && <Loading TextLoading="Entrando..." />}
      <BarberLogo whidth="100%" height="160" />
      <TextInputComponent
        value={email}
        onChangeText={(p) => setEmail(p)}
        iconName="email"
        placeholder="Usuario"
      />
      <TextInputComponent
        value={password}
        onChangeText={(p) => setPassword(p)}
        iconName="lock"
        placeholder="Senha"
        seePassword={true}
      />
      <ButtonComponent
        title="Entrar"
        backgroundColor="#268596"
        textColor="#ffff"
        onPress={() => handleLogin()}
      />
      <ButtonComponent
        title="Novo por aqui? Cadastre-se"
        backgroundColor="transparent"
        textColor="#ffff"
        fontSize={16}
        onPress={() => navigation.navigate('Sigin')}
      />
    </Container>
  );
};
export default Login;
