import styled from 'styled-components/native';

export const TabArea = styled.View`
height: 60px;
background-color: #4eadbe;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const TabItem = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  background-color: #f0f0f0;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  bottom: 30px;
  border: 3px solid #4eadbe;
`;
export const Avatar = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;