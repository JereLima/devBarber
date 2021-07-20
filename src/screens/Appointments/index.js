import React, {useState, useEffect} from 'react';
import {Text, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
//Components
import Api from '../../Api';
import CardSchedulingComponent from '../../components/CardSchedulingComponent';
import Loading from '../../components/Loading';

const Appointments = () => {
  const navigation = useNavigation();

  const [emptyList, setEmptyList] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getMyAppointments();
  }, []);

  const getMyAppointments = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getAppointments();
    if (res.error == '') {
      console.log(res.list);
      setList(res.list);
      setLoading(false);
    } else {
      alert('Erro: ' + res.error);
    }
  };

  return (
    <Container>
      {loading && (
        <Loading textLoading="Carregando agendamentos" icon={false} />
      )}
      <HeaderView>
        <HeaderText>Meus Agendamentos</HeaderText>
      </HeaderView>

      <Scroll
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getMyAppointments} />
        }>
        {list ? (
          <AppointmentsView>
            {list.map((item, key) => (
              <CardSchedulingComponent key={key} data={item} />
            ))}
          </AppointmentsView>
        ) : (
          <AppointmentsEmpty>
            <TextEmpty>Nenhum agendamento no momento</TextEmpty>
          </AppointmentsEmpty>
        )}
      </Scroll>
    </Container>
  );
};
export default Appointments;

export const Container = styled.SafeAreaView`
  flex: 1;
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
  width: 100%;
`;
export const AppointmentsView = styled.View``;
export const AppointmentsEmpty = styled.View``;
export const TextEmpty = styled.Text`
  font-size: 18px;
  color: #63c2d1;
`;
