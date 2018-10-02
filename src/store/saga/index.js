import { takeLatest } from 'redux-saga/effects';

// sagas
import { fetchPosts, refreshPosts } from './postSaga';
import { fetchUserDetail } from './userAuthSaga';

// action types
import { FETCH_POSTS, REFRESH_POSTS, FETCH_USER_DETAIL } from '../actions/types';

function* mainSaga() {
    yield takeLatest(FETCH_POSTS, fetchPosts);
    yield takeLatest(REFRESH_POSTS, refreshPosts);
    yield takeLatest(FETCH_USER_DETAIL, fetchUserDetail);
}

export default mainSaga;