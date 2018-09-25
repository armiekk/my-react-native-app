import React from 'react';
import { View, StyleSheet } from 'react-native';

class UserBadge extends React.Component {
  render() {
    return (
      <View style={styles.userBadgeContainer}>
        <View style={[styles.userBadgeItem, this.props.style]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBadgeItem: {
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 100,
    backgroundColor: '#fff',
    flex: 1
  },
  userBadgeContainer: {
    width: 40,
    height: 40
  }
});

export default UserBadge;
