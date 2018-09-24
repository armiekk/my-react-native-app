import React from 'react';
import { View, Text } from 'react-native';

import MainStyles from '../constants/MainStyles';

class PostEditorScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={MainStyles.pageContainer}>
        <Text>This is Post Editor Page</Text>
      </View>
    );
  }
}

export default PostEditorScreen;
