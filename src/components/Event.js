import React from 'react';
import { View, Image, Text } from 'react-native';
import EntypoIcon from '@expo/vector-icons/Entypo';

// styles
import MainStyles from '../constants/MainStyles';

//component
import FontAwesome from '../components/FontAwesomeIcon';

class Event extends React.Component {
    render() {
        return (
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Image style={{ resizeMode: 'cover', height: 180 }} source={{ uri: 'https://s3-ap-southeast-1.amazonaws.com/hitevent/on-web.jpg' }}></Image>
                <Text style={MainStyles.eventCaption}>{this.props.caption || 'Event Caption'}</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <EntypoIcon name={'location-pin'} style={{ fontSize: 24, color: '#9B9B9B' }} />
                        <Text style={{ fontSize: 16, color: '#9B9B9B' }}>ศูนย์ประชุมแห่งชาติ</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: '#9B9B9B' }}>4-20 กันยายน 2018</Text>
                    </View>
                </View>
                <View style={MainStyles.divider} />
            </View>
        )
    }
}

export default Event;