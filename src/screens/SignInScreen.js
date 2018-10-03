import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView, WebView, BackHandler, ActivityIndicator } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import { LinearGradient, SecureStore } from 'expo';

class SignInScreen extends React.Component {

    webViewNode;

    state = {
        backButtonEnabled: false,
        isLoaded: false,
        isAuthenticated: false
    }

    componentDidMount() {
        this.setUpBackHandler();
    }

    setUpBackHandler = () => {
        BackHandler.addEventListener('hardwareBackPress', this.backHandler);
    }

    onNavigationStateChange = (navState) => {
        fetch('http://www.hitevent.com/auth/me').then(res => res.json()).then(console.log)
        this.detectUserAuth();
        this.setState({
            backButtonEnabled: navState.canGoBack,
        });
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
    }

    backHandler = () => {
        if (this.state.backButtonEnabled) {
            this.webViewNode.goBack();
            return true;
        }
    }

    onWebviewLoaded = () => {
        const script = `
            window.postMessage(document.body.innerText);

        // `;
        this.webViewNode.injectJavaScript(script);
    }

    onMessage = (payload) => {
        const res = payload.nativeEvent.data;
        try {
            const userObject = JSON.parse(res);
            console.log(userObject.token);
            this.setState({ isAuthenticated: true });
        } catch (error) {

        }
    }

    detectUserAuth = () => {
        const script = `
            window.postMessage(document.body.innerText);
        // `;
        this.webViewNode.injectJavaScript(script);
    }

    render() {
        return (
            // <LinearGradient colors={['#FF7500', '#FF006D']} style={{ flex: 1 }}>
            //     <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //         <Image source={require('../assets/images/hitevent_logo.png')} />
            //         <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Untitled Application</Text>
            //         <ElevatedView elevation={3} style={[styles.textInputContainer, styles.emailContainer]}>
            //             <TextInput underlineColorAndroid="transparent" style={styles.textInput} placeholder="อีเมลล์"></TextInput>
            //         </ElevatedView>
            //         <ElevatedView elevation={3} style={[styles.textInputContainer, styles.passwordContainer]}>
            //             <TextInput textContentType="password" secureTextEntry={true} underlineColorAndroid="transparent" style={styles.textInput} placeholder="รหัสผ่าน"></TextInput>
            //         </ElevatedView>
            //     </KeyboardAvoidingView>
            // </LinearGradient>
            <React.Fragment>
                {
                    this.state.isAuthenticated
                        ? <ActivityIndicator size="large" />
                        : <WebView
                            style={{ marginTop: 24 }}
                            ref={node => this.webViewNode = node}
                            source={{ uri: "https://www.hitevent.com/auth/login?mobile" }}
                            mixedContentMode="always"
                            javaScriptEnabled={true}
                            // onLoadEnd={this.onWebviewLoaded}
                            onMessage={this.onMessage}
                            domStorageEnabled={true}

                            onNavigationStateChange={this.onNavigationStateChange}
                        />
                }
            </React.Fragment>
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