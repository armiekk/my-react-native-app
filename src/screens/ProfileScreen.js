import React from 'react';
import { View, Text } from 'react-native';

import AppHeader from '../components/AppHeader';

export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} title="ข้อมูลส่วนตัว" />,
    }

    render() {
        return (
            <View>
                <Text>This is Profile Tab!</Text>
            </View>
        )
    }
}