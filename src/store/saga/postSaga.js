import { call, put } from 'redux-saga/effects';

// API
import Api from '../api';

// Action
import * as actions from '../actions';


export function* fetchPosts(action) {
    try {
        const res = yield call(Api.fetchPost, action.payload);
        yield put(actions.fetchPostsSuccess(res.data));
    } catch (error) {
        yield put(actions.fetchPostsFailure());
    }
}

export function* refreshPosts() {
    try {
        const defaultCondt = { offset: 0, limit: 5 };
        const res = yield call(Api.fetchPost, defaultCondt);
        yield put(actions.fetchPostsSuccess(res.data));
    } catch (error) {
        yield put(actions.fetchPostsFailure());
    }
}