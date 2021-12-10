import React, {useContext} from 'react';
//Icon
import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';
//
import {UserContext} from '../../contexts/UserContext';
import {TabArea, TabItem, TabItemCenter, Avatar} from './styles';

const TabBar = ({state, navigation}) => {
  const {state: user} = useContext(UserContext);

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
