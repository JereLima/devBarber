import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import StarsComponent from '../StarsComponent';
import Api from '../../Api';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 95%;
  height: 120px;
  background-color: #4eadbe;
  align-items: center;
  border-radius: 10px;
  margin-top: 15px;
  padding: 1%;
  justify-content: flex-start;
`;
export const AreaText = styled.View`
  width: 59%;
  height: 90%;
  background-color: #f0f0f0;
  border-radius: 10px;
  justify-content: space-around;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;
export const ViewProfile = styled.View`
  width: 150px;
  /* height: 30px; */
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 20px;
  padding: 2px;
  border: 2px solid #4eadbe;
`;
export const TextButton = styled.Text`
  font-size: 16px;
`;
export const AvatarImage = styled.Image`
  width: 35%;
  height: 92%;
  margin: 2%;
  border-radius: 10px;
  border-color: white;
  border-width: 2px;
`;

export default function BarberComponent({data}) {
  const navigation = useNavigation();
  const route = useRoute();

  const goDetails = () => {
    navigation.navigate('Details', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars,
    });
  };
  return (
    <Container onPress={() => goDetails()}>
      <AvatarImage resizeMode="cover" source={{uri: data.avatar}} />
      <AreaText>
        <Title>{data.name}</Title>
        <ViewProfile>
          <TextButton>Ver perfil</TextButton>
        </ViewProfile>
        <StarsComponent stars={data.stars} showNumber={true} />
      </AreaText>
    </Container>
  );
}
