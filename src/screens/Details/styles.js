import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
export const FakeSwiper = styled.View`
  background-color: #ddd;
  height: 300px;
`;
export const PageBody = styled.View`
  background-color: white;
  border-top-left-radius: 50px;
  align-items: center;
  margin-top: -50px;
`;
export const ImageView = styled.View`
  margin-bottom: -50px;
  align-self: flex-start;
  background-color: blueviolet;
  border-radius: 10px;
  top: -75px;
  left: 10%;
  height: 150px;
  width: 150px;
`;
export const ImageProfile = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 3px solid white;
`;
export const BarberServices = styled.View`
  padding: 5% 5%;
  border-radius: 20px;
  width: 90%;
  align-items: flex-start;
  background-color: white;
`;
export const TextTest = styled.Text`
  color: white;
`;
export const SwipeDotActive = styled.View`
  width: 20px;
  height: 10px;
  border-radius: 5px;
  background-color: #63c2d1;
`;
export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #aaa;
  margin: 5px;
`;
export const SwipeItem = styled.View`
  height: 300px;
  background-color: #63c2d1;
`;
export const SwipeImage = styled.Image`
  width: 100%;
  height: 300px;
`;
export const LoadingView = styled.View`
  background-color: #aaaa;
`;
export const TextLoading = styled.Text`
  font-size: 20px;
`;
export const ServicesView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const ServicesText = styled.Text`
  font-size: 20px;
  color: #63c2d1;
  font-weight: bold;
`;
export const ServicesPrice = styled.Text`
  font-size: 20px;
  color: #63c2d1;
`;
export const ScrollAssessments = styled.ScrollView`
  margin-top: 20px;
  background-color: white;
  width: 90%;
`;
export const TestimonialsView = styled.View`
  background-color: darkblue;
  height: 100px;
  margin: 0px 50px;
  border-radius: 20px;
  padding: 10px;
`;
export const ProfileData = styled.View`
  height: 80px;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 10px;
  width: 50%;
`;
export const UserName = styled.Text`
  font-size: 25px;
  color: black;
  font-weight: bold;
`;
export const ProfileFavorite = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 200px;
  justify-content: center;
  align-items: center;
`;
export const TestimonialArea = styled.View`
  width: 90%;
  padding-top: 20px;
  margin-bottom: 20px;
`;
export const TextListOfServices = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #63c2d0;
  margin-bottom: 20px;
`;
export const BackButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #0003;
  position: absolute;
  justify-content: center;
  top: 20px;
  left: 20px;
  z-index: 1;
`;
export const TestimonialText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
export const TestimonialMessage = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
export const ModalView = styled.View`
  background-color: transparent;
  align-self: center;
  margin-top: 40%;
  height: 60%;
  width: 100%;
  justify-content: flex-end;
`;
