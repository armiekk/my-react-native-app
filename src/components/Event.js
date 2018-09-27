import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import EntypoIcon from '@expo/vector-icons/Entypo';
import { withNavigation } from 'react-navigation';

// styles
import MainStyles from '../constants/MainStyles';


class Event extends React.Component {

    _navigateToEventDetail = () => {
        const { navigation, eventData } = this.props;
        navigation.navigate('EventDetail', eventData.eventId);
    }

    render() {
        const { eventData } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this._navigateToEventDetail}>
                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Image style={{ resizeMode: 'cover', height: 180 }} source={{ uri: eventData.imgUri || 'https://s3-ap-southeast-1.amazonaws.com/hitevent/on-web.jpg' }}></Image>
                    <Text style={MainStyles.eventCaption}>{eventData.caption || 'Event Caption'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <EntypoIcon name={'location-pin'} style={{ fontSize: 24, color: '#9B9B9B' }} />
                            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>{eventData.location || 'ศูนย์ประชุมแห่งชาติ'}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>{ eventData.dateRange || '4-20 กันยายน 2018' }</Text>
                        </View>
                    </View>
                    <View style={MainStyles.divider} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation(Event);