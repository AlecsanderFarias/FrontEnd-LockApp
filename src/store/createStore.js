/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
