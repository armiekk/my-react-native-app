import produce from 'immer';
import { ListView } from 'react-native';

// action types
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, REFRESH_POSTS } from '../actions/types';

const postDs = new ListView.DataSource({ rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2) });

const initialState = {
    offset: 0,
    limit: 5,
    count: 0,
    isFetching: false,
    postList: [],
    isError: false,
    postDs
};

const postReducer = produce((draft, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            draft.isFetching = true;
            return;
        case FETCH_POSTS_SUCCESS:
            const { offset, limit, count, results } = action.payload;
            draft.postList = [...draft.postList, ...results];
            draft.count = count;
            draft.offset = offset;
            draft.limit = limit;
            draft.isFetching = false;
            draft.postDs = draft.postDs.cloneWithRows(draft.postList);
            return;
        case FETCH_POSTS_FAILURE:
            draft.isError = true;
            return;
        case REFRESH_POSTS:
            draft.postList = [];
            draft.count = 0;
            draft.offset = 0;
            draft.limit = 5;
            draft.isFetching = true;
            draft.postDs = postDs;
            return;
    }
}, initialState);

export default postReducer;