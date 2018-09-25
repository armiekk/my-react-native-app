import React from 'react';
import { View, Text } from 'react-native';

import PostEditor from '../components/PostEditor';
import MainStyles from '../constants/MainStyles';
import FeedPostList from '../components/FeedPostList';

export default class FeedHomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={MainStyles.pageContainer}>
        {/* <Text>This is Feed!.</Text> */}
        <FeedPostList />
      </View>
    );
  }
}
