import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

// navigator
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

// screen
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth: AuthNavigator,
  AuthLoading: AuthLoadingScreen,
},
  {
    initialRouteName: 'AuthLoading'
  }
);
