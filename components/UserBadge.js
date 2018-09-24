import React from 'react';
import { View, StyleSheet } from 'react-native';

class UserBadge extends React.Component {
    render() {
        return (
            <View style={styles.userBadgeContainer}></View>
        )
    }
}

const styles = StyleSheet.create({
    userBadgeContainer: {
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: 100,
        backgroundColor: '#fff',
        flex: 1
    }
});

export default UserBadge;