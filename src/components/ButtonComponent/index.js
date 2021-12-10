import React from 'react';
import {Container, Title} from './styles';

const ButtonComponent = (props) => {
  return (
    <Container
      onPress={props.onPress}
      backgroundColor={props.backgroundColor}
      width={props.width}
      height={props.height}>
      <Title textColor={props.textColor} fontSize={props.fontSize}>
        {props.title}
      </Title>
    </Container>
  );
};
export default ButtonComponent;
