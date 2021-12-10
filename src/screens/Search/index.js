import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
//Components
import TextInputComponent from '../../components/TextInput';
import Loading from '../../components/Loading';

import Api from '../../Api';
import BarberComponent from '../../components/BarberComponent';
import {Container} from './styles';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyList, setEmptyList] = useState(false);
  const [list, setList] = useState([]);

  const searchBarber = async () => {
    setEmptyList(false);
    setList([]);
    if (searchText !== '') {
      console.log('entrou');
      let res = await Api.search(searchText);
      if (res.error == '') {
        setList(res.list);
      } else {
        setEmptyList(true);
        alert('Erro: ' + res.error);
      }
    }
    setLoading(false);
  };

  return (
    <Container>
      <TextInputComponent
        placeholder="Digite o nome do barbeiro"
        placeholderTextColor="#FFFFFF"
        value={searchText}
        onChangeText={(t) => setSearchText(t)}
        onEndEditing={() => searchBarber()}
        returnKeyType="search"
        autoFocus
        selectTextOnFocus
      />
      <ScrollView>
        {loading && <Loading textLoading="Organizando....." />}
        <View>
          {list.map((item, key) => (
            <BarberComponent key={key} data={item} />
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};
export default Search;
