import React from 'react';
import styled from 'styled-components/native';

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

export const Container = styled.TouchableOpacity`
  width: ${(props) => props.width || '90%'};
  height: ${(props) => props.height || '60px'};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || '#ddd'};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Title = styled.Text`
  font-size: ${(props) => props.fontSize || 20}px;
  color: ${(props) => props.textColor || '#fff'};
`;