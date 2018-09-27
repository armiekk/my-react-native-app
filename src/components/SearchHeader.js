import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

// component
import AppHeader from './AppHeader';

import MainStyles from '../constants/MainStyles';

class SearchHeader extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <AppHeader displayBackButton={true} {...this.props}>
                <TextInput style={styles.searchBox} underlineColorAndroid="#fff" autoCorrect={false} placeholder="ค้นหา" placeholderTextColor="#fff"></TextInput>
                <View style={{ width: 10 }}></View>
            </AppHeader>
        )
    }
}

const styles = StyleSheet.create({
    searchBox: {
        flex: 1,
        fontSize: 20,
        lineHeight: 24,
        color: '#fff',
        padding: 10
    }
})

export default SearchHeader;