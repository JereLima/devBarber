/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import ButtonComponent from '../ButtonComponent';
import PrevButton from '../../assets/nav_prev.svg';
import NextButton from '../../assets/nav_next.svg';
import Api from '../../Api';
import {useNavigation} from '@react-navigation/native';
import {
  Modal,
  ModalArea,
  ModalBody,
  ButtonBack,
  TitelButtonBack,
  UserInfo,
  Avatar,
  Username,
  ServiceItem,
  TextServiceSelected,
  TextServicePrice,
  DateArea,
  DateInfo,
  DateTitle,
  PrevButtonArea,
  NextButtonArea,
  HourItem,
  DateList,
  ButtonDate,
  TextDayNumber,
  ViewNumberArea,
  TextDayWeek,
  HourList,
  TimeList,
  TimeItem,
  TimeText,
} from './styles';

export const ModalShedulingComponent = ({show, setShow, user, service}) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(0);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  const navigation = useNavigation();
  const atualDate = new Date();

  //Salvar as datas nas states ~ Save dates in states
  useEffect(() => {
    setSelectedYear(atualDate.getFullYear());
    setSelectedMonth(atualDate.getMonth());
    setSelectedDay(atualDate.getDay());
  }, []);

  useEffect(() => {
    if (user.available) {
      let daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate(); //ok
      let newListDays = [];

      for (let i = 1; i <= daysInMonth; i++) {
        let d = new Date(selectedYear, selectedMonth, i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        let selDate = `${year}-${month}-${day}`;
        console.log(`${year}-${month}-${day}`);

        let availability = user.available.filter((e) => e.date === selDate);

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekday: days[d.getDay()],
          number: i,
        });
      }
      setListDays(newListDays);
      console.log(listDays);
      setSelectedDay(0);
      setListHours([]);
      setSelectedHour(0);
    }
  }, [user, selectedMonth, selectedYear]);

  // //Verifica os dias
  useEffect(() => {
    if (user.available && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;

      let selDate = `${year}-${month}-${day}`;

      let availability = user.available.filter((e) => e.date === selDate);
      console.log('xxxxx', availability);
      if (availability.length > 0) {
        setListHours(availability[0].hours);
      }
    }
  }, [user, selectedDay]);

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleButtonPrev = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
    setListHours([]);
  };

  const handleButtonNext = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
    setListHours([]);
  };

  const handleFinishScheduling = async () => {
    if (
      user.id &&
      service !== null &&
      selectedYear > 0 &&
      selectedMonth > 0 &&
      selectedDay > 0 &&
      selectedHour != null
    ) {
      console.log('data', selectedDay, selectedMonth, selectedYear, user.id);
      let res = await Api.setAppointment(
        user.id,
        user.services[service].id,
        selectedYear,
        selectedMonth + 1,
        selectedDay,
        selectedHour,
      );
      if (res.error == '') {
        alert('Agendamento criado com sucesso');
        setShow(false);
        navigation.navigate('Appointments');
      } else {
        console.log(res);
        alert('Error', res.error);
      }
      setShow(false);
      navigation.navigate('Appointments');
    } else {
      alert('Preencha todos os campos');
    }
  };
  const Months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  return (
    <Modal transparent visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <ButtonBack onPress={() => handleCloseModal()}>
            <TitelButtonBack>X</TitelButtonBack>
          </ButtonBack>
          <UserInfo>
            <Avatar source={{uri: user.avatar}} />
            <Username>{user.name}</Username>
          </UserInfo>
          {service != null && (
            <ServiceItem>
              <TextServiceSelected>
                {user.services[service].name}
              </TextServiceSelected>
              <TextServicePrice>
                R$ {user.services[service].price.toFixed(2)}
              </TextServicePrice>
            </ServiceItem>
          )}
          {service != null && (
            <DateArea>
              <DateInfo>
                <PrevButtonArea onPress={() => handleButtonPrev()}>
                  <PrevButton width="40" height="40" fill="#000" />
                </PrevButtonArea>
                <DateTitle>
                  {Months[selectedMonth]} {selectedYear}
                </DateTitle>
                <NextButtonArea onPress={() => handleButtonNext()}>
                  <NextButton width="40" height="40" fill="#000" />
                </NextButtonArea>
              </DateInfo>
              <DateList horizontal showsHorizontalScrollIndicator={false}>
                {listDays.map((item, key) => (
                  <ButtonDate
                    onPress={() =>
                      item.status ? setSelectedDay(item.number) : null
                    }
                    style={{
                      opacity: item.status ? 1 : 0.5,
                      backgroundColor:
                        item.number === selectedDay ? 'white' : '#268596',
                    }}
                    key={key}>
                    <TextDayWeek
                      style={{
                        color: item.number === selectedDay ? 'black' : 'white',
                      }}>
                      {item.weekday}
                    </TextDayWeek>
                    <ViewNumberArea
                      style={{
                        backgroundColor:
                          item.number === selectedDay ? '#268596' : '#fff',
                      }}>
                      <TextDayNumber
                        style={{
                          color:
                            item.number === selectedDay ? 'white' : 'black',
                        }}>
                        {item.number}
                      </TextDayNumber>
                    </ViewNumberArea>
                  </ButtonDate>
                ))}
              </DateList>
            </DateArea>
          )}
          <HourItem>
            {selectedDay > 0 && listHours.length > 0 ? (
              <TimeList horizontal showsHorizontalScrollIndicator={false}>
                {listHours.map((item, key) => (
                  <TimeItem
                    key={key}
                    onPress={() => setSelectedHour(item)}
                    style={{
                      backgroundColor:
                        item === selectedHour ? '#4eadbe' : 'white',
                    }}>
                    <TimeText
                      style={{
                        color: item === selectedHour ? 'white' : '#4eadbe',
                      }}>
                      {item}
                    </TimeText>
                  </TimeItem>
                ))}
              </TimeList>
            ) : (
              <View style={{justifyContent: 'center'}}>
                <Text>Selcione uma data para ver os horários</Text>
              </View>
            )}
          </HourItem>
          <ButtonComponent
            title="Finalizar Agendamento"
            backgroundColor="#268596"
            width="95%"
            height="50px"
            onPress={() => handleFinishScheduling()}
          />
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};

export default ModalShedulingComponent;
