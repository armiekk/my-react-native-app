import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// component
import PostActionButton from './PostActionButton';
import UserBadge from './UserBadge';
import FontAwesome from './FontAwesomeIcon';

class Post extends React.Component {

  _renderPostAction = () => {
    const { postData } = this.props;
    switch (postData.postType) {
      case 'exibhition':
        return (
          <React.Fragment>
            <PostActionButton title="SHOW ON MAP" label={'map'} labelSize={20}>
            </PostActionButton>
            <PostActionButton title="VISIT BOOTH" label={'home'}>
            </PostActionButton>
          </React.Fragment>
        )

        break;
      case 'deal':
        return (
          <React.Fragment>
            <PostActionButton title="SHOW ON MAP" label={'map'} labelSize={16}>
            </PostActionButton>
            <PostActionButton title="VISIT BOOTH" label={'home'} labelSize={20}>
            </PostActionButton>
            <PostActionButton title="BUY ONLINE" label={'shopping-cart'} labelSize={20}>
            </PostActionButton>
          </React.Fragment>
        )
      default:
        return <React.Fragment></React.Fragment>;
    }
  }

  _renderLikeCount = () => {
    const { postData } = this.props;
    return (
      !!postData.like && postData.like.count > 0
        ? (
          <React.Fragment>
            {postData.like.hasLike
              ? <FontAwesome name={'heart'} size={18} color={'#FF002B'} />
              : <FontAwesome name={'heart-o'} size={18} color={'#FF002B'} />
            }
            <View style={{ width: 5 }}></View>
            <Text> {postData.like.hasLike ? 'You and' : ''} {postData.like.count} People likes This</Text>
          </React.Fragment>
        ) : (
          <FontAwesome name={'heart-o'} size={18} color={'#FF002B'} />
        )
    )
  }

  render() {
    const { postData } = this.props;
    return !!postData
      ? (
        <View style={styles.postContainer}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <UserBadge style={{ backgroundColor: 'lightgrey' }} />
            <View style={{ marginLeft: 8 }}>
              <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18 }}>{postData.userName || 'GJ JTL'}</Text>
              <Text style={{ color: 'grey', fontSize: 14 }}>{postData.postTime || '1 min.'} {postData.location || 'TDEX DIVING EXPO'}</Text>
            </View>
          </View>
          <View>
            <Text>{postData.caption || 'this is a tempolary post caption'}</Text>
          </View>
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            {this._renderLikeCount()}
          </View>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
            {this._renderPostAction()}
          </View> */}
        </View>
      ) : <View></View>;
  }
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 5
  },
});

export default Post;
