import React from 'react';
import styled from 'styled-components/native';

export default function LoadingComponent({icon, textLoading}) {
  return (
    <Container>
      {icon && <Loading Size="small" color="#f0f0f0" />}
      <TextLoading>{textLoading}</TextLoading>
    </Container>
  );
}

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #0008;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
`;
export const Loading = styled.ActivityIndicator``;
export const TextLoading = styled.Text`
  color: white;
  font-size: 18px;
`;