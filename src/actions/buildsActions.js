// @flow
import { BuildsActionType as ActionType } from '../types/builds';
import type { BuildsAction as Action } from '../types/builds';

export const fetchBuilds = (apiKey: string) : Action => ({ type: ActionType.FETCH_BUILDS, payload: apiKey });
export const fetchBuildsSuccess = (apiKey: string) : Action => ({ type: ActionType.FETCH_BUILDS_SUCCESS, payload: apiKey });
export const fetchBuildsFailure = () : Action => ({ type: ActionType.FETCH_BUILDS_FAILURE });

export const fetchBuildsByBranch = (branch: string) : Action => ({ type: ActionType.FETCH_BUILDS_BY_BRANCH, payload: branch });
export const fetchBuildsByBranchSuccess = (branch: string) : Action => ({ type: ActionType.FETCH_BUILDS_BY_BRANCH_SUCCESS, payload: branch });
export const fetchBuildsByBranchFailure = () : Action => ({ type: ActionType.FETCH_BUILDS_BY_BRANCH_FAILURE });
