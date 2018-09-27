import React from 'react';
import { View, Text } from 'react-native';
import AppHeader from '../components/AppHeader';

// component
import Post from '../components/Post';

// style
import MainStyles from '../constants/MainStyles';

class DiscoveryScreen extends React.Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} title="ค้นพบ" />,
    }

    render() {
        return (
            <View>
                <Post postData={{ postType: 'exibhition', like: { count: 20, } }}></Post>
                <Post postData={{ postType: 'deal', like: { count: 36, hasLike: true } }}></Post>
                <Post></Post>
            </View>
        )
    }
}

export default DiscoveryScreen;