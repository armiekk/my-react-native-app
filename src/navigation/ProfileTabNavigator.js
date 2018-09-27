import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import FontAwesomeIcon from '../components/FontAwesomeIcon';

const ProfileTabNavigator = createStackNavigator({
    Profile: ProfileScreen
});

ProfileTabNavigator.navigationOptions = {
    tabBarLabel: 'ข้อมูลส่วนตัว',
    tabBarIcon: ({ focused }) => (
        <FontAwesomeIcon
            focused={focused}
            name={'user'}
            color="white" 
        />
    ),
}

export default ProfileTabNavigator;