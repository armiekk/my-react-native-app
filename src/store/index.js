import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// reducer
import rootReducer from './reducers';

// saga
import mainSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga);

export default store;