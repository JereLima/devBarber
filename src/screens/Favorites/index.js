import React, {useState, useEffect, useContext} from 'react';
import {RefreshControl, Text, View} from 'react-native';
import styled from 'styled-components/native';
//Components
import LoadingComponent from '../../components/Loading';

import Api from '../../Api';
import BarberComponent from '../../components/BarberComponent';

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

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
export const HeaderView = styled.View`
  height: 10%;
  width: 100%;
  background-color: #63c2d1;
  justify-content: center;
  padding-left: 20px;
`;
export const HeaderText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
export const Scroll = styled.ScrollView`
  flex: 1;
`;
export const BarberView = styled.View`
  width: 100%;
  align-items: center;
`;
export const EmptyWarning = styled.Text`
  margin-top: 20%;
  font-size: 16px;
  font-weight: bold;
  color: #63c2d1;
`;
