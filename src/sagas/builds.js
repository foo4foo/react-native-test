// @flow
import { call, put, takeEvery } from 'redux-saga/effects';

import { BuildsActionType as ACTIONS } from '../types/builds';
import { getBuildsData } from '../api/builds';

function* getBuilds(action, apiKey) {
  try {
    const buildsData = yield call(getBuildsData, apiKey);
    yield put({ type: ACTIONS.FETCH_BUILDS_SUCCESS, data: buildsData });
  } catch(e) {
    yield put({ type: ACTIONS.FETCH_BUILDS_FAILURE, data: e });
  }
}

export default function * (): Generator<any, any, any> {
  yield takeEvery(ACTIONS.FETCH_BUILDS, getBuilds);
}
