import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
export const HeaderView = styled.View`
  height: 10%;
  width: 100%;
  background-color: #63c2d1;
  justify-content: center;
  padding-left: 20px;
`;
export const HeaderText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
export const Scroll = styled.ScrollView`
  flex: 1;
`;
export const BarberView = styled.View`
  width: 100%;
  align-items: center;
`;
export const EmptyWarning = styled.Text`
  margin-top: 20%;
  font-size: 16px;
  font-weight: bold;
  color: #63c2d1;
`;
