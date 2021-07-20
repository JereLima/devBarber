/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.backgroundColor || '#4eadbe'};
  width: 90%;
  height: 60px;
  border-radius: 10px;
  padding-left: 15px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Input = styled.TextInput`
  width: 95%;
  font-size: 18px;
  color: #f0f0f0;
`;
export const ButtonArea = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;
export const Title = styled.Text``;

const TextInputComponent = (props) => {
  const [secureView, setSecureView] = useState(true);

  const secureButton = () => {
    if (secureView === true) {
      setSecureView(false);
    } else {
      setSecureView(true);
    }
  };

  return (
    <Container backgroundColor={props.backgroundColor}>
      <Icon name={props.iconName} size={25} color="#ffff" />
      <Input
        backgroundColor={props.backgroundColorInput}
        placeholderTextColor={props.placeholderTextColor || '#fff'}
        placeholder={props.placeholder}
        secureTextEntry={secureView ? false : true} //para desabiliatar o security textentry baseado na state secure view
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        editable={props.editable}
        selectTextOnFocus={props.selectTextOnFocus}
        autoFocus={props.autoFocus}
        returnKeyType={props.returnKeyType}
        onEndEditing={props.onEndEditing}
      />
      {props.seePassword && (
        <ButtonArea onPress={() => secureButton()}>
          <Icon
            name="remove-red-eye"
            size={25}
            color={secureView === true ? '#fff' : '#268596'}
          />
        </ButtonArea>
      )}
    </Container>
  );
};
export default TextInputComponent;

//
// export default function TextInputComponent(props) {
// const [secureView, setSecureView] = useState(true);
// const secureButton = () => {
// if (secureView === true) {
// setSecureView(false);
// } else {
// setSecureView(true);
// }
// };
// return (
// <View
// style={{
// width: '100%',
// height: 60,
// backgroundColor: '#f0f0f0',
// paddingLeft: 15,
// borderRadius: 50,
// flexDirection: 'row',
// alignItems: 'center',
// elevation: 2,
// marginTop: 5,
// marginBottom: 5,
// justifyContent: 'space-between',
// paddingRight: 60,
// }}>
{
  /* <Icon */
}
// name={props.iconName}
// size={props.iconSize}
// color={props.iconColor}
// />
{
  /* <TextInput */
}
// style={{width: '90%', color: 'black'}}
// placeholderTextColor={'#343a40'}
// placeholder={props.placeholder}
// secureTextEntry={secureView ? true : false} //para desabiliatar o security textentry baseado na state secure view
// onChangeText={props.onChangeText}
// value={props.value}
// keyboardType={props.keyboardType}
// editable={props.editable}
// autoCapitalize={props.autoCapitalize}
// autoCompleteType={props.autoCompleteType}
// returnKeyType={props.returnKeyType}
// />
{
  /* {props.seePassword && ( */
}
// <TouchableOpacity onPress={() => secureButton()}>
{
  /* <Icon */
}
// name="remove-red-eye"
// size={40}
// color={secureView ? '#AAA' : '#000'}
// />
{
  /* </TouchableOpacity> */
}
// )}
{
  /* </View> */
}
// );
// }
