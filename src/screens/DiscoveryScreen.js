import React from 'react';
import { View, ScrollView, ListView, RefreshControl } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

// component
import Post from '../components/Post';
import AppHeader from '../components/AppHeader';

class DiscoveryScreen extends React.Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} title="ค้นพบ" />,
    }

    _fakeData = [
        { postType: 'exibhition', like: { count: 20, } },
        { postType: 'deal', like: { count: 36, hasLike: true } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
        { postType: 'deal', like: { count: 36, hasLike: true }, store_img: { imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.0-8/16586956_1323896747680700_2967914501562263837_o.jpg?_nc_cat=110&oh=827cf4f2d288d55e28b102cf8e4e470e&oe=5C17C8D1' } },
    ]

    constructor(props) {
        super(props);
        const postDs = new ListView.DataSource({ rowHasChanged: this._rowHasChanged });
        this.state = {
            offset: 0,
            limit: 5,
            count: 0,
            isFetching: false,
            dataList: [],
            postDs
        };
    }

    async componentDidMount() {
        await this._updateDataListAsync()();
    }

    initialStateData = () => {
        const postDs = new ListView.DataSource({ rowHasChanged: this._rowHasChanged });
        this.setState({
            offset: 0,
            limit: 5,
            count: 0,
            isFetching: false,
            dataList: [],
            postDs
        });
    }

    _updateDataListAsync = ({ offset, limit, isRefresh } = { offset: this.state.offset, limit: this.state.limit, isRefresh: false }) => async () => {
        if (isRefresh) {
            this.initialStateData();
        }
        this.setState({ isFetching: true });
        const response = await this._fetchDataAsync(offset, limit);
        this._setDataList(response);
    }

    _setDataList = (response) => {
        const { data: { offset, limit, count, results } } = response;
        const newDataList = this.state.dataList.concat(results);
        const newDs = this.state.postDs.cloneWithRows(newDataList);
        this.setState({
            dataList: newDataList,
            postDs: newDs,
            isFetching: false,
            offset,
            limit,
            count
        });
    }

    _fetchDataAsync = (offset, limit) => {
        return new Promise((resolve, reject) => {
            const results = this._fakeData.slice(offset, offset + limit);
            const response = {
                data: {
                    offset: offset + results.length,
                    count: this._fakeData.length,
                    results,
                    limit
                }
            };
            setTimeout(() => resolve(response), 1000);
        });
    }

    _rowHasChanged = (r1, r2) => {
        // You might want to use a different comparison mechanism for performance.
        return JSON.stringify(r1) !== JSON.stringify(r2);
    }

    _renderRefreshControl() {
        return (
            <RefreshControl
                refreshing={this.state.isFetching}
                onRefresh={this._updateDataListAsync({ offset: 0, limit: 5, isRefresh: true })}
            />
        );
    }

    render() {
        return (
            <ListView
                renderScrollComponent={props => <InfiniteScrollView {...props} />}
                dataSource={this.state.postDs}
                renderRow={rowData => <Post postData={rowData} />}
                refreshControl={this._renderRefreshControl()}
                canLoadMore={this.state.offset !== this.state.count}
                onLoadMoreAsync={this._updateDataListAsync()}
                distanceToLoadMore={5000}
                scrollEventThrottle={1000}
            />
        )
    }
}

export default DiscoveryScreen;