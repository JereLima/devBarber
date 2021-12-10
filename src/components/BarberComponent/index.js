import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import StarsComponent from '../StarsComponent';
import {
  Container,
  AreaText,
  Title,
  ViewProfile,
  TextButton,
  AvatarImage,
} from './styles';

export default function BarberComponent({data}) {
  const navigation = useNavigation();

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
