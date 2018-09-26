import React from 'react';
import { createStackNavigator } from 'react-navigation';

import EventScreen from '../screens/EventScreen';
import FontAwesomeIcon from '../components/FontAwesomeIcon';

const EventNavigator = createStackNavigator({
    Event: EventScreen
});

EventNavigator.navigationOptions = {
    tabBarLabel: 'Events',
    tabBarIcon: () => <FontAwesomeIcon name={'calendar'} color="white" />,
}

export default EventNavigator;