// @flow
export const BuildsActionType = {
  FETCH_BUILDS: 'FETCH_BUILDS',
  FETCH_BUILDS_SUCCESS: 'FETCH_BUILDS_SUCCESS',
  FETCH_BUILDS_FAILURE: 'FETCH_BUILDS_FAILURE'
}

export type FETCH_BUILDS = { type: 'FETCH_BUILDS' }
export type FETCH_BUILDS_SUCCESS = { type: 'FETCH_BUILDS_SUCCESS' }
export type FETCH_BUILDS_FAILURE = { type: 'FETCH_BUILDS_FAILURE' }

export type BuildsAction =
| FETCH_BUILDS
| FETCH_BUILDS_SUCCESS
| FETCH_BUILDS_FAILURE