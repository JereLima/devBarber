import React, {useState} from 'react';
import styled from 'styled-components/native';
import ButtonComponent from '../ButtonComponent/';

const ModalComponent = ({show, setShow, titleModal, textModal}) => {
  return (
    <ModalContainer animationType="slide" transparent={true} visible={show}>
      <ModalArea>
        <ModalBody>
          <HeaderModal>
            <TitleModal>{titleModal}</TitleModal>
          </HeaderModal>
          <ModalText>{textModal}</ModalText>
          <AreaButtons>
            <ButtonComponent
              onPress={() => setShow(false)}
              title="fechar"
              backgroundColor="#4eadbe"
            />
          </AreaButtons>
        </ModalBody>
      </ModalArea>
    </ModalContainer>
  );
};

export default ModalComponent;

export const ModalContainer = styled.Modal``;
export const ModalArea = styled.SafeAreaView`
  flex: 1;
  background-color: #0009;
  justify-content: center;
  align-items: center;
`;
export const ModalBody = styled.View`
  width: 80%;
  background-color: whitesmoke;
  border-radius: 10px;
`;
export const HeaderModal = styled.View`
  background-color: #4eadbe;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const TitleModal = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
export const ModalText = styled.Text`
  color: #0008;
  font-size: 16px;
  margin: 10px;
  text-align: center;
`;
export const AreaButtons = styled.View`
  justify-content: center;
  align-items: center;
`;
