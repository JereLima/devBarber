import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Logout = styled.TouchableOpacity`
  width: 80%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: darkkhaki;
`;
export const TextLogout = styled.Text`
  font-size: 20px;
`;
export const IconPerfil = styled.Image`
  width: 120px;
  height: 120px;
  margin-top: 30px;
  border-radius: 60px;
  background-color: white;
`;
export const Scroll = styled.ScrollView`
  background-color: white;
  flex: 1;
`;
export const AreaEditUser = styled.View`
  padding-top: 40px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;
export const AreaUser = styled.View`
  width: 90%;
  margin-top: 30px;
  padding-top: 20px;
  background-color: #63c2d1;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const TextName = styled.Text`
  font-size: 20px;
`;
export const TextEmail = styled.Text`
  font-size: 20px;
`;
export const Space = styled.View`
  width: 100%;
  height: 65px;
`;
export const AdjustmentView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
