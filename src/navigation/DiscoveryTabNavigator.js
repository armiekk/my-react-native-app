import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DiscoveryScreen from '../screens/DiscoveryScreen';
import FontAwesomeIcon from '../components/FontAwesomeIcon';

const DiscoveryTabNavigator = createStackNavigator({
    Discover: DiscoveryScreen
});

DiscoveryTabNavigator.navigationOptions = {
    tabBarLabel: 'Discovery',
    tabBarIcon: ({ focused }) => (
        <FontAwesomeIcon
            name={'search'}
            color="white" 
        />
    ),
}

export default DiscoveryTabNavigator;