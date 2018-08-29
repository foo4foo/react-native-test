// @flow
import { call, put, takeEvery } from 'redux-saga/effects';

import { BuildsActionType as ACTIONS } from '../types/builds';

import type { 
  FETCH_BUILDS, 
  FETCH_BUILDS_SUCCESS, 
  FETCH_BUILDS_FAILURE, 
  FETCH_BUILDS_BY_BRANCH,
  FETCH_BUILDS_BY_BRANCH_SUCCESS,
  FETCH_BUILDS_BY_BRANCH_FAILURE,
} from '../types/builds';

import { getBuildsData, getBuildsDataByBranch } from '../api/builds';

// apiKey je trenutno opcioni parametar. getItem iz AsyncStorage-a iz nekog razloga ne radi
// kako sam ocekivao. ranije nisam imao problema.
function* getBuilds(action: FETCH_BUILDS, apiKey?: string): any {
  try {
    const buildsData = yield call(getBuildsData, apiKey);
    yield put({ type: ACTIONS.FETCH_BUILDS_SUCCESS, data: buildsData });
  } catch(e) {
    yield put({ type: ACTIONS.FETCH_BUILDS_FAILURE, data: e });
  }
}

function* getBuildsByBranch(action: FETCH_BUILDS_BY_BRANCH): any {
  try {
    const buildsData = yield call(getBuildsDataByBranch, action.payload);
    yield put({ type: ACTIONS.FETCH_BUILDS_BY_BRANCH_SUCCESS, data: buildsData });
  } catch(e) {
    yield put({ type: ACTIONS.FETCH_BUILDS_BY_BRANCH_FAILURE, data: e });
  }
}

export default function * (): Generator<any, any, any> {
  yield takeEvery(ACTIONS.FETCH_BUILDS, getBuilds);
  yield takeEvery(ACTIONS.FETCH_BUILDS_BY_BRANCH, getBuildsByBranch);
}
