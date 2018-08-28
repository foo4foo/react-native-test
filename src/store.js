// @flow
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { all } from 'redux-saga/effects';

import users from './sagas/users';
import builds from './sagas/builds';
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';
import { RootReducer } from './reducers';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();
const middleware = [sagaMiddleware, logger];
const composedMiddleware = compose(applyMiddleware(...middleware));

export default createStore(RootReducer, initialState, composedMiddleware);

sagaMiddleware.run(function * () {
  yield all(([
    users(),
    builds(),
  ]))
});
