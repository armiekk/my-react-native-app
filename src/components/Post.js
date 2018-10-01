import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ElevatedView from 'react-native-elevated-view';

// component
import PostActionButton from './PostActionButton';
import UserBadge from './UserBadge';
import FontAwesome from './FontAwesomeIcon';
import Image from './Image';

class Post extends React.Component {

  // state = {
  //   image: {
  //     width: null,
  //     height: null
  //   }
  // }

  // componentDidMount() {
  //   const { postData } = this.props;
  //   if (!!postData && !!postData.store_img) {
  //     this._setImageSize(postData.store_img.imageUrl);
  //   }
  // }

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

  _renderImage = (store_img) => {
    return (
      <View style={styles.postImageContainer}>
        <Image resizeMode="cover" resizeMethod="scale" source={{ uri: store_img.imageUrl }}></Image>
      </View>
    )
  }

  // _setImageSize = (url) => {
  //   if (!!url) {
  //     Image.getSize(url, (width, height) => {
  //       const screenWidth = Dimensions.get('window').width;
  //       const calculatedHeight = (screenWidth * height) / width;
  //       this.setState({ image: { width: screenWidth, height: calculatedHeight } })
  //     });
  //   }
  // }

  render() {
    const { postData } = this.props;
    return !!postData
      ? (
        <ElevatedView style={styles.postContainer} elevation={2}>
          <View style={styles.postHeader}>
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
          </View>
          {postData.store_img && this._renderImage(postData.store_img)}
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
            {this._renderPostAction()}
          </View> */}
        </ElevatedView>
      ) : <View></View>;
  }
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    marginBottom: 10
  },
  postImageContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  },
  postHeader: {
    padding: 8
  }
});

export default Post;
