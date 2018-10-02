import { call, put } from 'redux-saga/effects';

// API
import Api from '../api';

// actions
import { fetchUserDetailSuccess, fetchUserDetailFailure } from '../actions';

export function* fetchUserDetail() {
    try {
        const response = yield call(Api.fetchUserDetail);
        put(fetchUserDetailSuccess(response.data));
    } catch (error) {
        put(fetchUserDetailFailure());
    }
}