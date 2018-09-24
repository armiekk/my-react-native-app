import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DiscoverScreen from '../screens/DiscoverScreen';
import FontAwesomeIcon from '../components/FontAwesomeIcon';

const DiscoverTabNavigator = createStackNavigator({
    Discover: DiscoverScreen
});

DiscoverTabNavigator.navigationOptions = {
    tabBarLabel: 'Discover',
    tabBarIcon: ({ focused }) => (
        <FontAwesomeIcon
            name={'compass'}
        />
    ),
}

export default DiscoverTabNavigator;