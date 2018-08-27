import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import userSagas from './sagas/users';
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';
import { RootReducer } from './reducers';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();
const middleware = [sagaMiddleware, logger];
const composedMiddleware = compose(applyMiddleware(...middleware));

export default createStore(RootReducer, initialState, composedMiddleware);

sagaMiddleware.run(userSagas.getUserByIdSaga);
sagaMiddleware.run(userSagas.getUserByEmailSaga);
sagaMiddleware.run(userSagas.getUsersSaga);
