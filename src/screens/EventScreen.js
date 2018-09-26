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
        header: props => <AppHeader {...props} title="Events" />,
    }

    render() {
        return (
            <ScrollView style={MainStyles.pageContainer}>
                <EventHeader title="Feature events" />
                <Event caption="ไทยหนีเที่ยว : ตอนเที่ยวยกครัว (Fun Trip with Fam)" />
                <EventHeader title="Today events" />
                <Event caption="ไทยหนีเที่ยว : ตอนเที่ยวยกครัว (Fun Trip with Fam)" />
                <EventHeader title="Upcoming events" />
                <Event caption="ไทยหนีเที่ยว : ตอนเที่ยวยกครัว (Fun Trip with Fam)" />
            </ScrollView>
        )
    }
}



export default EventScreen;