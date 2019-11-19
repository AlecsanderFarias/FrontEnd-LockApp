/* eslint-disable no-undef */
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const SagaMiddleware = createSagaMiddleware();

const middlewares = [SagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

SagaMiddleware.run(rootSaga);

export { store, persistor };
