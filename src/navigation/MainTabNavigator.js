import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,

} from 'react-navigation';


// navigator
import DiscoveryTabNavigator from './DiscoveryTabNavigator';
import ProfileTabNavigator from './ProfileTabNavigator';
import NotificationTabNavigator from './NotificationTabNavigator';
import EventTabNavigator from './EventTabNavigator';
import EventDetailNavigator from './EventDetailNavigator';

// screen
import PostEditorScreen from '../screens/PostEditorScreen';

// component
import TabBarNavigator from '../components/TabBarNavigator';



const bottomTabNavigator = createBottomTabNavigator({
  EventTabNavigator,
  DiscoveryTabNavigator,
  NotificationTabNavigator,
  ProfileTabNavigator,
}, {
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#FF7500',
      labelStyle: {
        fontSize: 12,
        color: '#fff'
      },
    },
    tabBarComponent: props =>
      <TabBarNavigator {...props} style={{ backgroundColor: '#ff8219' }} />,
  });

bottomTabNavigator.navigationOptions = {
  header: null
};

const MainTabNavigator = createStackNavigator({
  BottomNavigator: bottomTabNavigator,
  PostEditor: PostEditorScreen,
  EventDetail: EventDetailNavigator
});

MainTabNavigator.navigationOptions = {
  header: null,
  mode: 'modal',
  initialRouteName: 'BottomNavigator',
};

export default MainTabNavigator;
