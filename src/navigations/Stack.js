import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import Sigin from '../screens/Sigin';
import Login from '../screens/Login';
import Home from '../screens/Home';
import ListaCards from '../screens/ListaCards';
import Splash from '../screens/Splash';
import Tab from './Tab';
import Details from '../screens/Details';
const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sigin" component={Sigin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
export default MainStack;
