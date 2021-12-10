import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Input, ButtonArea} from './styles';

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
