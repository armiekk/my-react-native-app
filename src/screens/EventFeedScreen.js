import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import { withNavigation } from 'react-navigation';


class EventFeedScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex: 1}}>
                <Text>This is EventFeedScreen Screen.</Text>
                <ActionButton buttonColor="#FF006D" onPress={() => navigation.navigate('PostEditor')}></ActionButton>
            </View>
        )
    }
}

export default withNavigation(EventFeedScreen);