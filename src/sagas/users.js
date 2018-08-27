import { call, put, takeEvery} from 'redux-saga/effects';

import { ACTIONS } from '../actions/UserActions';
import { getUserData, searchByEmail, getUsersData } from '../api/Users';

function* getUser(action) {
  try {
    const userData = yield call(getUserData, action.payload);
    yield put({ type: ACTIONS.GET_USER_SUCCESS, data: userData });
  } catch(e) {
    yield put({ type: ACTIONS.GET_USER_FAILURE, message: e.message });
  }
}

function* getUserByIdSaga() {
  yield takeEvery(ACTIONS.GET_USER, getUser);
}

function* getUserByEmail(action) {
  try {
		const userData = yield call(searchByEmail, action.payload);
    yield put({ type: ACTIONS.GET_USER_BY_EMAIL_SUCCESS, data: userData });
  } catch(e) {
    yield put({ type: ACTIONS.GET_USER_BY_EMAIL_FAILURE, message: e.message });
  }
}

function* getUserByEmailSaga() {
	yield takeEvery(ACTIONS.GET_USER_BY_EMAIL, getUserByEmail);
}

function* getUsers() {
  try {
    const usersData = yield call(getUsersData);
    yield put({ type: ACTIONS.GET_USERS_SUCCESS, data: usersData });
  } catch(e) {
    yield put({ type: ACTIONS.GET_USERS_FAILURE, message: e.message });
  }
}

function* getUsersSaga() {
  yield takeEvery(ACTIONS.GET_USERS, getUsers);
}

export default { getUsersSaga, getUserByIdSaga, getUserByEmailSaga };
