import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Buttons from '../ButtonComponent';

const CardComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name={props.nameIcon} size={40} color={props.colorIcon} />
        <Text
          style={{
            fontSize: props.fontSize,
            color: props.fontColor,
            fontWeight: props.fontWeight,
          }}>
          {props.title}
        </Text>
      </View>
      {props.buttonsVisible && (
        <View style={styles.footer}>
          <Buttons
            title="teste A"
            backgroundColor="#54ae"
            width="40%"
            textColor="#f0f0f0"
          />
          <Buttons
            title={props.titleButton || 'add a title'}
            backgroundColor={props.bottonBackground || 'green'}
            width={props.widthButton || '40%'}
            textColor={props.textButtonColor || '#f0f0f0'}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 150,
    backgroundColor: '#dee2ff',
    borderRadius: 20,
    elevation: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
    //justifyContent: 'space-evenly',
    backgroundColor: '#363457',
    height: 50,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  text: {
    width: '70%',
    color: 'white',
    fontSize: 25,
    paddingLeft: 20,
    fontFamily: 'ROBOTO',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CardComponent;
