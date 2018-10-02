// action types 
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, REFRESH_POSTS, FETCH_USER_DETAIL, FETCH_USER_DETAIL_SUCCESS, FETCH_USER_DETAIL_FAILURE } from './types';

export function fetchPosts(payload = { offset: 0, limit: 5 }) {
    return {
        type: FETCH_POSTS,
        payload
    };
}

export function fetchPostsSuccess(payload) {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    };
}

export function fetchPostsFailure() {
    return { type: FETCH_POSTS_FAILURE };
}

export function refreshPosts() {
    return { type: REFRESH_POSTS };
}

export function fetchUserDetail() {
    return {
        type: FETCH_USER_DETAIL
    }
}

export function fetchUserDetailSuccess(payload) {
    return {
        type: FETCH_USER_DETAIL_SUCCESS,
        payload
    }
}

export function fetchUserDetailFailure() {
    return {
        type: FETCH_USER_DETAIL_FAILURE
    }
}