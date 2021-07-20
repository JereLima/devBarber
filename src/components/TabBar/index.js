import React, {useContext} from 'react';
import styled from 'styled-components/native';
//Icon
import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';
//
import {UserContext} from '../../contexts/UserContext';

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const TabItem = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  background-color: #f0f0f0;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  bottom: 30px;
  border: 3px solid #4eadbe;
`;
const Avatar = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;

const TabBar = ({state, navigation}) => {
  const {state: user} = useContext(UserContext);
  console.log('ddddd', user);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          width="35"
          heigth="35"
          fill={state.index === 0 ? '#f0f0f0' : '#fff9'}
        />
      </TabItem>

      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          width="35"
          heigth="35"
          fill={state.index === 1 ? '#f0f0f0' : '#fff9'}
        />
      </TabItem>

      <TabItemCenter onPress={() => goTo('Appointments')}>
        <TodayIcon width="50" heigth="50" fill="#4eadbe" />
      </TabItemCenter>

      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          width="35"
          heigth="35"
          fill={state.index === 3 ? '#f0f0f0' : '#fff9'}
        />
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar ? (
          <Avatar width="35" heigth="35" source={{uri: user.avatar}} />
        ) : (
          <AccountIcon fill={state.index === 4 ? '#f0f0f0' : '#fff9'} />
        )}
      </TabItem>
    </TabArea>
  );
};
export default TabBar;
