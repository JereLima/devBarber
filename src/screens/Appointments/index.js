import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//Components
import Api from '../../Api';
import CardSchedulingComponent from '../../components/CardSchedulingComponent';
import Loading from '../../components/Loading';

import {
  Container,
  HeaderView,
  HeaderText,
  Scroll,
  AppointmentsView,
  AppointmentsEmpty,
  TextEmpty,
} from './styles';

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
