import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';
//Components
import LoadingComponent from '../../components/Loading';

import Api from '../../Api';
import BarberComponent from '../../components/BarberComponent';

import {
  Container,
  HeaderView,
  HeaderText,
  Scroll,
  BarberView,
  EmptyWarning,
} from './styles';
const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [emptyList, setEmptyList] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    searchfavorite();
  }, []);

  const searchfavorite = async () => {
    setLoading(true);
    let res = await Api.getFavorites();

    if (res.error == '') {
      setList(res.list);
      console.log(res.list);
      setLoading(false);
    } else {
      alert('Erro: ' + res.error);
    }
  };

  return (
    <Container>
      {loading && (
        <LoadingComponent textLoading="Buscando favoritos" icon={false} />
      )}
      <HeaderView>
        <HeaderText>Favoritos</HeaderText>
      </HeaderView>

      <Scroll
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={searchfavorite} />
        }>
        {list && (
          <BarberView>
            {list.map((item, key) => (
              <BarberComponent key={key} data={item} />
            ))}
          </BarberView>
        )}

        {list.length === 0 && <EmptyWarning>Não há favoritos...</EmptyWarning>}
      </Scroll>
    </Container>
  );
};
export default Favorites;
