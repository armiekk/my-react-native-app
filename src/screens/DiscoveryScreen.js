import React from 'react';
import { ListView, RefreshControl } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { connect } from 'react-redux';

// actions
import * as actions from '../store/actions';

// component
import Post from '../components/Post';
import AppHeader from '../components/AppHeader';

class DiscoveryScreen extends React.Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} title="ค้นพบ" />,
    }


    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.props.fetchPosts();
    }

    _renderRefreshControl() {
        return (
            <RefreshControl
                refreshing={this.props.post.isFetching}
                onRefresh={() => this.props.refreshPosts()}
            />
        );
    }

    render() {
        const { offset, limit, count, postDs } = this.props.post;
        return (
            <ListView
                renderScrollComponent={props => <InfiniteScrollView {...props} />}
                dataSource={postDs}
                renderRow={rowData => <Post postData={rowData} />}
                refreshControl={this._renderRefreshControl()}
                canLoadMore={offset !== count}
                onLoadMoreAsync={() => this.props.fetchPosts({ offset, limit })}
            />
        )
    }
}

function mapStateToProps({ post }) {
    return {
        post
    }
}

export default connect(mapStateToProps, actions)(DiscoveryScreen);