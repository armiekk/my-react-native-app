import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Route } from 'react-router-native'

// component
import FontAwesome from '../components/FontAwesomeIcon';
import SearchHeader from '../components/SearchHeader';
import ActionButton from 'react-native-action-button';
import TabLink from '../components/TabLink';

// screen
import EventAboutScreen from '../screens/EventAboutScreen';
import EventFeedScreen from '../screens/EventFeedScreen';
import EventPhotosScreen from '../screens/EventPhotosScreen';

class EventDetailScreen extends React.Component {

  static navigationOptions = {
    header: props => <SearchHeader {...props} />,
  }

  state = {
    index: 0,
    routes: [
      { key: 'about', title: 'เกี่ยวกับ' },
      { key: 'event', title: 'กิจกรรม' },
      { key: 'photos', title: 'รูปภาพ' },
    ],
  };

  _renderTabBar = props => (
    <TabBar
      {...props}
      style={{
        marginTop: 1,
        backgroundColor: '#fff'
      }}
      tabStyle={{
        padding: 2
      }}
      labelStyle={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
      }}
      indicatorStyle={{ backgroundColor: '#FF006D' }}
    />
  )

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
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
            <View style={styles.eventActionPanel}>
              <FontAwesome name="map" size={24} color="#FF006D" />
              <Text style={styles.eventActionLabel}>แผนที่งาน</Text>
            </View>
            <View style={styles.eventActionPanel}>
              <FontAwesome name="comment" size={30} color="#FF006D" />
              <Text style={styles.eventActionLabel}>ติดต่อผู้จัด</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff' }}>
            <TabLink
              to="/"
              underlayColor='#f0f4f7'
              style={styles.navItem}>
              <Text>เกี่ยวกับ</Text>
            </TabLink>
            <TabLink
              to="/feed"
              underlayColor='#f0f4f7'
              style={styles.navItem}>
              <Text>กิจกรรม</Text>
            </TabLink>
            <TabLink
              to="/photos"
              underlayColor='#f0f4f7'
              style={styles.navItem}>
              <Text>รูปภาพ</Text>
            </TabLink>
          </View>
          <Route exact path="/" component={EventAboutScreen} />
          <Route path="/feed" component={EventFeedScreen} />
          <Route path="/photos" component={EventPhotosScreen} />
        </ScrollView>


        <ActionButton buttonColor="#FF006D" onPress={() => navigation.navigate('PostEditor')}></ActionButton>
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
    fontSize: 16,
    color: '#FF006D'
  }
});

export default withNavigation(EventDetailScreen);
