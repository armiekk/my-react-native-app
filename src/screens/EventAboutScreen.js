import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FontAwesomeIcon from '../components/FontAwesomeIcon';

class EventAboutScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#fff', flex: 1, paddingTop: 10 }}>
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <FontAwesomeIcon name="home" size={24} />
          </View>
          <Text style={styles.description}>Hitevent</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <FontAwesomeIcon name="calendar-o" size={22} />
          </View>
          <Text style={styles.description}>
            ไทยหนีเที่ยว Fun Trip with Fam เที่ยวยกครัว
          </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <FontAwesomeIcon name="clock-o" size={24} />
          </View>
          <Text style={styles.description}>4 - 20 กันยายน พ.ศ.2561</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <FontAwesomeIcon name="info" size={24} />
          </View>
          <Text style={styles.description}>คำอธิบายกิจกรรม</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    flexWrap: 'wrap',
    flex: 1
  },
  sectionIcon: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'center',
    marginRight: 30
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    padding: 10
  }
});

export default EventAboutScreen;
