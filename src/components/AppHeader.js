import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { HeaderBackButton } from 'react-navigation'

import MainStyles from '../constants/MainStyles';

class AppHeader extends React.Component {
    render() {
        return (
            <LinearGradient
                style={[styles.appHeaderContainer, MainStyles.statusBarOffset]}
                colors={['#FF7500', '#FF006D']}
                start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {this.props.displayBackButton && <HeaderBackButton onPress={() => this.props.navigation.pop()}></HeaderBackButton>}
                    {this.props.children || <Text style={MainStyles.headerTitle}>{this.props.title || 'Untitle Screen'}</Text>}
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    appHeaderContainer: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 50, height: 100 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
    }
})

export default AppHeader;