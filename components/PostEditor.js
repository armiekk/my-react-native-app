import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import MainStyles from '../constants/MainStyles';
import UserBadge from '../components/UserBadge';

class PostEditor extends React.Component {
    render() {
        return (
            <View style={[MainStyles.postEditor, styles.postEditorWrapper]}>
                <View style={[styles.postEditorMargin, styles.userBadgeContainer]}>
                    <UserBadge></UserBadge>
                </View>
                <View style={[styles.postEditorMargin, styles.postInputContainer]}>
                    <TextInput style={MainStyles.postInput} underlineColorAndroid="transparent"></TextInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postEditorWrapper: {
        flexDirection: 'row',
    },
    postEditorMargin: {
        margin: 8
    },
    userBadgeContainer: {
        width: 40
    },
    postInputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        flex: 1,
        borderRadius: 24,
        paddingLeft: 20,
        paddingRight: 20
    },
});

export default PostEditor;