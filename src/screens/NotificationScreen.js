import React from 'react';
import { View, Text } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class NotificationScreen extends React.Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} title="Notifications" />,
    }

    render() {
        return (
            <View>
                <Text>Notification Tabs!</Text>
            </View>
        )
    }
}
