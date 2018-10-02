import produce from 'immer';

// action types
import {
    FETCH_USER_DETAIL_SUCCESS,
    FETCH_USER_DETAIL_FAILURE
} from '../actions/types';

const initialState = {
    userName: null,
    displayName: null,
    email: null,
    isError: false,
};

const userAuthReducer = produce((draft, action) => {
    switch (action.type) {
        case FETCH_USER_DETAIL_SUCCESS:
            const { userName, displayName, email } = action.payload;
            draft.userName = userName;
            draft.displayName = displayName;
            draft.email = email;
            return;
        case FETCH_USER_DETAIL_FAILURE:
            draft.isError = true;
            return;
    }
},
    initialState
);

export default userAuthReducer;