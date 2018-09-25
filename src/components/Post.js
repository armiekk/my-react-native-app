import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserBadge from './UserBadge';

class Post extends React.Component {
  render() {
    const { postData } = this.props;
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <UserBadge style={{ backgroundColor: 'orange' }} />
          <Text>{postData}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 100 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
    padding: 8
  },
  postHeader: {
    flexDirection: 'row'
  }
});

export default Post;
