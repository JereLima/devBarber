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
