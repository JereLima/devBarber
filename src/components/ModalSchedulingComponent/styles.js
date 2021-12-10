import styled from 'styled-components/native';

export const Modal = styled.Modal``;
export const ModalArea = styled.View`
  flex: 1;
  background-color: #0008;
  justify-content: flex-end;
  align-items: center;
`;
export const ModalBody = styled.View`
  background-color: #4eadbe;
  width: 90%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 10px;
  padding-top: 25px;
  align-items: center;
`;
export const ButtonBack = styled.TouchableOpacity`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -30px;
  border: 2px solid #4eadbe;
`;
export const TitelButtonBack = styled.Text`
  font-size: 20px;
  color: #4eadbe;
`;
export const UserInfo = styled.View`
  background-color: white;
  width: 95%;
  height: 80px;
  margin-bottom: 5px;
  border-radius: 7px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  margin-right: 10px;
`;
export const Username = styled.Text`
  font-size: 20px;
  color: #4eadbe;
  font-weight: bold;
`;

export const ServiceItem = styled.View`
  background-color: white;
  width: 95%;
  margin-bottom: 5px;
  border-radius: 7px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextServiceSelected = styled.Text`
  color: #4eadbe;
  font-weight: bold;
  font-size: 18px;
`;
export const TextServicePrice = styled.Text`
  color: #4eadbe;
  font-weight: bold;
  font-size: 18px;
`;
export const DateArea = styled.View`
  background-color: white;
  width: 95%;
  margin-bottom: 5px;
  border-radius: 7px;
  padding: 10px;
  justify-content: space-between;
`;
export const DateInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const DateTitle = styled.Text`
  width: 140px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
export const PrevButtonArea = styled.TouchableOpacity`
  align-items: flex-end;
  flex: 1;
`;
export const NextButtonArea = styled.TouchableOpacity`
  flex: 1;
`;

export const HourItem = styled.View`
  background-color: white;
  width: 95%;
  margin-bottom: 5px;
  border-radius: 7px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
export const DateList = styled.ScrollView`
  height: 80px;
`;
export const ButtonDate = styled.TouchableOpacity`
  background-color: #4eadbe;
  border: 1px solid #4eadda;
  margin: 3px;
  width: 56px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 2px;
`;
export const TextDayNumber = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
export const ViewNumberArea = styled.View`
  background-color: white;
  width: 90%;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 10px;
`;
export const TextDayWeek = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
export const HourList = styled.View`
  width: 95%;
  border-radius: 7px;
  justify-content: center;
  background-color: white;
  margin-top: 2px;
  padding: 10px;
`;
export const TimeList = styled.ScrollView``;
export const TimeItem = styled.TouchableOpacity`
  height: 50px;
  width: 75px;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border-radius: 10px;
  background-color: #4eadbe;
`;
export const TimeText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
