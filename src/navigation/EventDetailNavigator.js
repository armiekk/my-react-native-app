import { createMaterialTopTabNavigator } from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';

// component
import SearchHeader from '../components/SearchHeader';

// screen
import EventAboutScreen from '../screens/EventAboutScreen';
import EventFeedScreen from '../screens/EventFeedScreen';
import EventPhotosScreen from '../screens/EventPhotosScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const EventDetailNavigator = createMaterialTopTabNavigator({
    EventAbout: {
        screen: EventAboutScreen,
        navigationOptions: () => ({
            tabBarLabel: 'เกี่ยวกับ',
        })
    },
    EventFeed: {
        screen: EventFeedScreen,
        navigationOptions: () => ({
            tabBarLabel: 'กิจกรรม'
        })
    },
    EventPhotos: {
        screen: EventPhotosScreen,
        navigationOptions: () => ({
            tabBarLabel: 'รูปภาพ'
        })
    }
}, {
        tabBarComponent: props =>
            <EventDetailScreen
                {...props}
            />,
        tabBarOptions: {
            activeTintColor: '#FF006D',
            inactiveTintColor: '#000',
            pressColor: '#fff',
            style: {
                backgroundColor: '#fff'
            },
            tabStyle: {
                backgroundColor: '#fff',
                padding: 2
            },
            labelStyle: {
                fontSize: 16,
                fontWeight: 'bold'
            },
        },
    });

EventDetailNavigator.navigationOptions = {
    header: props => <SearchHeader {...props} />,
    initialRouteName: 'EventAbout',
}

export default EventDetailNavigator;