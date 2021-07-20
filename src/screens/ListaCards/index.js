import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CardComponent from '../../components/CardComponent';

const ListaCards = () => {
  return (
    <SafeAreaView>
      <CardComponent
        title="Testado"
        fontColor="#f0f0f0"
        fontSize={25}
        buttonsVisible={true}
        bottonBackground="#f33"
      />
    </SafeAreaView>
  );
};
export default ListaCards;
