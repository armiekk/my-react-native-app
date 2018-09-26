import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { HeaderBackButton } from 'react-navigation'

class AppHeader extends React.Component {
    render() {
        return (
            <LinearGradient
                style={styles.appHeaderContainer}
                colors={['#FF7500', '#FF006D']}
                start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {this.props.displayBackButton && <HeaderBackButton></HeaderBackButton>}
                    <Text style={styles.headerTitle}>{this.props.title || 'Untitle Screen'}</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    appHeaderContainer: {
        height: 60,
        marginTop: Platform.OS == "ios" ? 20 : 24,
        justifyContent: 'center',
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 50, height: 100 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
    },
    headerTitle: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default AppHeader;