// @flow
import { BuildsActionType as ActionType } from '../types/builds';
import type { BuildsAction as Action } from '../types/builds';

export const fetchBuilds = (apiKey) : Action => ({ type: ActionType.FETCH_BUILDS, payload: apiKey });
export const fetchBuildsSuccess = (apiKey) : Action => ({ type: ActionType.FETCH_BUILDS_SUCCESS, payload: apiKey });
export const fetchBuildsFailure = () : Action => ({ type: ActionType.FETCH_BUILDS_FAILURE });
