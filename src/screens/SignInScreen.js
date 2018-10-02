import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import { LinearGradient } from 'expo';

class SignInScreen extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#FF7500', '#FF006D']} style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/images/hitevent_logo.png')} />
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Untitled Application</Text>
                    <ElevatedView elevation={3} style={[styles.textInputContainer, styles.emailContainer]}>
                        <TextInput underlineColorAndroid="transparent" style={styles.textInput} placeholder="อีเมลล์"></TextInput>
                    </ElevatedView>
                    <ElevatedView elevation={3} style={[styles.textInputContainer, styles.passwordContainer]}>
                        <TextInput textContentType="password" secureTextEntry={true} underlineColorAndroid="transparent" style={styles.textInput} placeholder="รหัสผ่าน"></TextInput>
                    </ElevatedView>
                </KeyboardAvoidingView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff'
    },
    emailContainer: {
        marginTop: 20,
        borderTopStartRadius: 4,
        borderTopEndRadius: 4,
        borderBottomWidth: 1.5,
        borderColor: '#dddddd',
        borderStyle: 'solid'
    },
    passwordContainer: {
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        padding: 10
    }
});

export default SignInScreen;