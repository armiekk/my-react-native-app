import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { MaterialTopTabBar } from 'react-navigation-tabs';

// component
import FontAwesome from '../components/FontAwesomeIcon';

class EventDetailScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.eventHeaderContainer}>
          <View style={styles.thumbnailWrapper}>
            <Image
              style={{ resizeMode: 'cover', height: 180 }}
              source={{
                uri:
                  'https://s3-ap-southeast-1.amazonaws.com/hitevent/on-web.jpg'
              }}
            />
          </View>
        </View>
        <View style={styles.eventTitleContainer}>
          <Text style={styles.eventTitle}>
            ไทยหนีเที่ยว: ตอนเที่ยวยกครัว (Fun Trip with Fam)
          </Text>
        </View>
        <View style={styles.eventActionContainer}>
          <View style={styles.eventActionPanel}>
            <FontAwesome name="location-arrow" size={30} color="#FF006D" />
            <Text style={styles.eventActionLabel}>สถานที่</Text>
          </View>
          {/* <View style={styles.eventActionPanel}>
                        <FontAwesome name="map" size={24} color="#FF006D" />
                        <Text style={styles.eventActionLabel}>แผนที่งาน</Text>
                    </View>
                    <View style={styles.eventActionPanel}>
                        <FontAwesome name="comment" size={30} color="#FF006D" />
                        <Text style={styles.eventActionLabel}>ติดต่อผู้จัด</Text>
                    </View> */}
        </View>
        <MaterialTopTabBar {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventTitleContainer: {
    backgroundColor: '#fff',
    padding: 10
  },
  eventTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  eventHeaderContainer: {
    flexDirection: 'row'
  },
  thumbnailWrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  eventActionContainer: {
    flexDirection: 'row'
  },
  eventActionPanel: {
    flex: 1,
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    margin: 1,
    alignItems: 'center',
    padding: 5
  },
  eventActionLabel: {
    fontSize: 20,
    color: '#FF006D'
  }
});

export default EventDetailScreen;
