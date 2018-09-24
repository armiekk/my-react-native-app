import React from 'react';
import { ListView, View, Text } from 'react-native';

import PostEditor from './PostEditor';
import Post from './Post';

class FeedPostList extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
  }
  renderFeedPost = (postData, sectionID, rowID) =>
    +rowID === 0 ? (
      <React.Fragment>
        <PostEditor />
        <Post postData={postData} />
      </React.Fragment>
    ) : (
      <Post postData={postData} />
    );

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderFeedPost}
      />
    );
  }
}

export default FeedPostList;
