import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {AuthLoadingScreen, SignInScreen} from '../Auth/';
import MyTabs from './tabs';
import SignUpScreen from '../Auth/SignUpScreen';
import AuthScreen from '../Auth/AuthScreen';

const AuthStack = createStackNavigator(
  {
    Home: AuthScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'SignIn',
    navigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MyTabs,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
