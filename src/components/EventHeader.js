import React from 'react';
import { View, Text } from 'react-native';

// styles
import MainStyles from '../constants/MainStyles';

class EventHeader extends React.Component {
    render() {
        return (
            <View style={MainStyles.eventHeaderContainer}>
                <Text style={MainStyles.eventHeaderTitle}>{ this.props.title || 'Event' }</Text>
            </View>
        )
    }
}

export default EventHeader;