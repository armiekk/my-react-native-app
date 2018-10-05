import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView, WebView, BackHandler, ActivityIndicator } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import { LinearGradient, SecureStore } from 'expo';

class SignInScreen extends React.Component {

    webViewNode;

    state = {
        backButtonEnabled: false,
        isAuthenticated: false,
        webViewUri: 'https://www.hitevent.com/auth/login?mobile'
    }

    componentDidMount() {
        this.setUpBackHandler();
        this.onSignInPageLoadStart();
        this.checkIfSignOut();
    }

    checkIfSignOut = () => {
        const { navigation } = this.props;
        const onSignOut = navigation.getParam('onSignOut', false);
        if (onSignOut) {
            this.setState({ webViewUri: 'https://www.hitevent.com/users/sign_out' });
        }
    }

    setUpBackHandler = () => {
        BackHandler.addEventListener('hardwareBackPress', this.backHandler);
    }

    onNavigationStateChange = (navState) => {
        this.setState({
            backButtonEnabled: navState.canGoBack,
        });
        this.setUserAuth();
        const { url } = navState;
        if (!!url && (
            url === 'http://www.hitevent.com/' ||
            url === 'https://www.hitevent.com/' ||
            url === 'http://www.hitevent.com/#_=_'
        )) {
            this.webViewNode.injectJavaScript(`window.location.href = 'https://www.hitevent.com/auth/login?mobile'`);
            return;
        }
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

    onSignInPageLoadStart = async () => {
        try {
            const userToken = await SecureStore.getItemAsync('userToken');
            if (!!userToken) {
                this.setState({ isAuthenticated: true });
            }
        } catch (error) {
        }
    }

    onMessage = async (payload) => {
        const res = payload.nativeEvent.data;
        try {
            const userObject = JSON.parse(res);
            if (!!userObject.token) {
                this.setState({ isAuthenticated: true });
                await SecureStore.setItemAsync('userToken', userObject.token);
                this.props.navigation.navigate('Main');
            }
        } catch (error) {
            // console.warn('cannot get user token', error);
        }
    }

    setUserAuth = () => {
        const script = `
                const userObject = JSON.parse(document.body.innerText);
                if (!!userObject.token) {
                    document.body.style.color = '#fff';
                    window.postMessage(document.body.innerText);
                }
         `;
        this.webViewNode.injectJavaScript(script);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.isAuthenticated
                        ? (
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <ActivityIndicator size="large" />
                            </View>
                        ) : (
                            <WebView
                                style={{ marginTop: 24 }}
                                ref={node => this.webViewNode = node}
                                source={{ uri: this.state.webViewUri }}
                                mixedContentMode={'always'}
                                javaScriptEnabled={true}
                                onMessage={this.onMessage}
                                domStorageEnabled={true}
                                onNavigationStateChange={this.onNavigationStateChange}
                            />
                        )
                }
            </React.Fragment>
        )
    }
}


export default SignInScreen;