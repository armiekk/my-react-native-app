import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NotificationScreen from '../screens/NotificationScreen';
import FontAwesomeIcon from '../components/FontAwesomeIcon';

const NotificationTabNavigator = createStackNavigator({
    Notification: NotificationScreen
});

NotificationTabNavigator.navigationOptions = {
    tabBarLabel: 'Notification',
    tabBarIcon: ({ focused }) => (
        <FontAwesomeIcon
            focused={focused}
            name={'bell'}
        />
    ),
}

export default NotificationTabNavigator;