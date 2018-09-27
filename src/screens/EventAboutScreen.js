import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

class EventAboutScreen extends React.Component {

    _renderText = () => {
        let { eventDesc } = this.props;
        eventDesc = eventDesc || `ดีลท่องเที่ยวราคาดี ไม่ถึง 1,000 บาท มันส์กันยกแก๊งค์\n
เฮกันยกก๊วน กับดีลราคาดี ลดสูงสุด 75%\n
ที่งานไทยหนีเที่ยว\n
ช้อปดีลไม่ถึงพันได้ที่ http://bit.ly/2NB91R6\n
งานไทยหนีเที่ยว ตอน Fun Trip with Fam เที่ยวยกครัว\n
4 - 20 กันยายน 2561\n
www.thaineetiew.com\n
อย่ารอช้า...ดีลดีขนาดนี้ชวนเพื่อนและครอบครัวจองกันเลย!`;
        return eventDesc.split('\n').map((text, i) => <Text style={{ textAlign: 'center', lineHeight: 20, fontSize: 16 }} key={i}>{text}{'\n'}</Text>);
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff', flex: 1, paddingTop: 10,  }}>
                <View style={styles.section}>
                    <Text>ผู้จัด</Text>
                    <Text></Text>
                </View>
                <View style={styles.section}>
                    <Text>สถานที่</Text>
                    <Text></Text>
                </View>
                <View style={styles.section}>
                    <Text>ระยะเวลา</Text>
                    <Text></Text>
                </View>
                <View style={styles.section}>
                    <Text>คำอธิบาย</Text>
                    <Text></Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {

    },
    section: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default EventAboutScreen;