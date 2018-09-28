import React from 'react';
import { View, Text } from 'react-native';

// component 
import Post from '../components/Post';


class EventFeedScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Post postData={{ postType: 'exibhition', like: { count: 20, } }}></Post>
                <Post postData={{ postType: 'deal', like: { count: 36, hasLike: true } }}></Post>
                <Post postData={{ postType: 'deal', like: { count: 36, hasLike: true } }}></Post>
                <Post postData={{ postType: 'deal', like: { count: 36, hasLike: true } }}></Post>
                <Post postData={{ postType: 'deal', like: { count: 36, hasLike: true } }}></Post>
                <Post postData={{ postType: 'deal', like: { count: 36, hasLike: true } }}></Post>
                <Post></Post>
            </View>
        )
    }
}

export default EventFeedScreen;