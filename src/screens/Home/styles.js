import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const HeaderArea = styled.View`
  width: 100%;
  height: 150px;
  background-color: #4eadbe;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 28px;
  font-family: Roboto;
  color: #f0f0f0;
`;
export const SearchArea = styled.TouchableOpacity``;
export const LocationArea = styled.View`
  width: 95%;
  background-color: #4eadbe;
  align-self: center;
  align-items: center;
  margin-top: 20px;
  height: 60px;
  border-radius: 10px;
  justify-content: space-evenly;
  flex-direction: row;
  padding-right: 20px;
`;
export const LocalText = styled.Text`
  font-size: 20px;
  border-radius: 20px;
  font-family: Roboto;
  color: #f0f0f0;
`;
export const LocalButton = styled.TouchableOpacity``;
export const Scrooler = styled.ScrollView`
  width: 100%;
`;
export const Loading = styled.ActivityIndicator`
  margin-top: 30px;
`;
export const ListArea = styled.View`
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
`;
