import React from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { SecureStore } from 'expo';
import { connect } from 'react-redux';

// actions
import * as actions from '../store/actions';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._detectAuthenticated();
    }

    _detectAuthenticated = async () => {
        const token = await SecureStore.getItemAsync('tokenId');
        if (!!token) {
            this.props.fetchUserDetail();
            this.props.navigation.navigate('Main');
        } else {
            this.props.navigation.navigate('Auth');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="orange" />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

function mapStateToProps({ userAuth }) {
    return {
        userAuth
    }
}

export default connect(mapStateToProps, actions)(AuthLoadingScreen);