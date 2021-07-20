import React, {useState, useContext, useSe} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
//Components
import TextInputComponent from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';
import ModalComponent from '../../components/ModalComponent';
//Imagens/svgs
import BarberLogo from '../../assets/barber.svg';
//api
import Api from '../../Api';

const Profile = () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const {state: user} = useContext(UserContext);

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [edit, setEdit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [titleModal, setTitleModal] = useState('Atenção');
  const [textModal, setTextModal] = useState(
    'Ao atualizar os dados, será necesssário fazer o Login novamente',
  );
  const [show, setShow] = useState(true);

  const clearToken = async () => {
    await AsyncStorage.removeItem('token');
    try {
      console.log('token removido');
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenEditArea = () => {
    setIsVisible(true);
    setEdit(true);
  };
  const updateDataUser = () => {
    setIsVisible(true);
    Api.updateUser({
      name: name,
      email: email,
      password: password,
      password_confirm: password,
    })
      .then((res) => {
        console.log('resposta', res);
        handleLogout();
      })
      .catch((e) => console.log(e));
  };
  const handleLogout = async () => {
    await Api.Logout();
    await clearToken();
    navigation.reset({
      routes: [
        {
          name: 'Login',
        },
      ],
    });
  };
  return (
    /*
      name:nome, 2 letras
      email: email valido e novo
      password: senhas te que ser iguais
      password_confirma
    */
    <Scroll>
      <Container>
        <ModalComponent
          show={isVisible}
          titleModal={titleModal}
          textModal={textModal}
          setShow={setIsVisible}
        />
        <IconPerfil source={{uri: user.user.avatar}} resizeMode="cover" />
        {!edit && (
          <AreaUser>
            <TextName>{user.user.name}</TextName>
            <TextEmail>{user.user.email}</TextEmail>

            <ButtonComponent
              title="Editar Dados"
              backgroundColor="#FF4500"
              onPress={() => handleOpenEditArea()}
            />
          </AreaUser>
        )}

        {edit && (
          <AreaEditUser>
            <TextInputComponent
              placeholder="Nome"
              onChangeText={(n) => setName(n)}
            />
            <TextInputComponent
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
            />
            <TextInputComponent
              placeholder="Senha"
              onChangeText={(p) => setPassword(p)}
            />
            <TextInputComponent
              placeholder="Confirme a senha"
              onChangeText={(pc) => setPasswordConfirm(pc)}
            />
            <AdjustmentView>
              <ButtonComponent
                width="40%"
                title="Voltar"
                backgroundColor="#aaa"
                onPress={() => setEdit(false)}
              />
              <ButtonComponent
                width="40%"
                title="Atulizar Dados"
                backgroundColor="#093a"
                onPress={updateDataUser}
              />
            </AdjustmentView>
          </AreaEditUser>
        )}
        <ButtonComponent
          title="Sair"
          textColor="#000"
          backgroundColor="transparent"
          onPress={handleLogout}
        />
        <Space />
      </Container>
    </Scroll>
  );
};
export default Profile;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Logout = styled.TouchableOpacity`
  width: 80%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: darkkhaki;
`;
export const TextLogout = styled.Text`
  font-size: 20px;
`;
export const IconPerfil = styled.Image`
  width: 120px;
  height: 120px;
  margin-top: 30px;
  border-radius: 60px;
  background-color: white;
`;
export const Scroll = styled.ScrollView`
  background-color: white;
  flex: 1;
`;
export const AreaEditUser = styled.View`
  padding-top: 40px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;
export const AreaUser = styled.View`
  width: 90%;
  margin-top: 30px;
  padding-top: 20px;
  background-color: #63c2d1;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const TextName = styled.Text`
  font-size: 20px;
`;
export const TextEmail = styled.Text`
  font-size: 20px;
`;
export const Space = styled.View`
  width: 100%;
  height: 65px;
`;
export const AdjustmentView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
