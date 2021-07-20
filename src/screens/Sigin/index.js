import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
//Components
import TextInputComponent from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';
//Imagens/svgs
import BarberLogo from '../../assets/barber.svg';
import Api from '../../Api';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #63c2d1;
`;
export const Insputs = styled.TextInput``;

const SingUp = () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (name && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert('Senhas não conferem');
      } else {
        let json = await Api.signUp(name, email, password);
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
          console.log(json.error);
        }
      }
    } else {
      //console.log('Todos campos precisam ser preenchidos');
    }
  };

  return (
    <Container>
      <BarberLogo whidth="100%" height="60" />
      <TextInputComponent
        value={name}
        onChangeText={(n) => setName(n)}
        iconName="person"
        placeholder="Digite seu Nome"
      />
      <TextInputComponent
        value={email}
        onChangeText={(e) => setEmail(e)}
        iconName="email"
        placeholder="Digite seu Email"
      />
      <TextInputComponent
        value={password}
        onChangeText={(p) => setPassword(p)}
        iconName="lock"
        placeholder="Crie uma senha"
        seePassword={true}
      />
      <TextInputComponent
        value={confirmPassword}
        onChangeText={(p) => setConfirmPassword(p)}
        iconName="lock"
        placeholder="Crie uma senha"
        seePassword={true}
      />
      <ButtonComponent
        title="Entrar"
        backgroundColor="#268596"
        textColor="#ffff"
        onPress={() => handleSignUp()}
      />
      <ButtonComponent
        title="Já possui uma conta? Faça Login"
        backgroundColor="transparent"
        textColor="#ffff"
        fontSize={16}
        onPress={() => navigation.navigate('Login')}
      />
    </Container>
  );
};
export default SingUp;
