import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Stack from './Stack';
//Provider
import UserContextProvider from '../contexts/UserContext';

function MainStackNavigator() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
export default MainStackNavigator;
