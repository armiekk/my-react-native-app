import { combineReducers } from 'redux';

// reducers
import postReducer from './postReducer';
import userAuthReducer from './userAuthReducer';

const rootReducer = combineReducers({
    post: postReducer,
    userAuth: userAuthReducer
});

export default rootReducer;