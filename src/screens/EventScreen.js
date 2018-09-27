import React from 'react';
import { View, ScrollView, Text } from 'react-native';

// component
import AppHeader from '../components/AppHeader';
import Event from '../components/Event';
import EventHeader from '../components/EventHeader';

// styles
import MainStyles from '../constants/MainStyles';

class EventScreen extends React.Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} title="อีเวนต์" />,
    }

    render() {
        return (
            <ScrollView style={MainStyles.pageContainer}>
                <EventHeader title="Feature events" />
                <Event eventData={{ caption: 'ไทยหนีเที่ยว : ตอนเที่ยวยกครัว (Fun Trip with Fam)' }} />
                <EventHeader title="Today events" />
                <Event eventData={{ caption: 'ไทยหนีเที่ยว : ตอนเที่ยวยกครัว (Fun Trip with Fam)' }} />
                <EventHeader title="Upcoming events" />
                <Event eventData={{ caption: 'ไทยหนีเที่ยว : ตอนเที่ยวยกครัว (Fun Trip with Fam)' }} />
            </ScrollView>
        )
    }
}



export default EventScreen;