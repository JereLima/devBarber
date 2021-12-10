import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
//Components
import TextInputComponent from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';
import ModalComponent from '../../components/ModalComponent';
//Imagens/svgs
//api
import Api from '../../Api';
import {
  Container,
  IconPerfil,
  Scroll,
  AreaEditUser,
  AreaUser,
  TextName,
  TextEmail,
  Space,
  AdjustmentView,
} from './styles';

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
