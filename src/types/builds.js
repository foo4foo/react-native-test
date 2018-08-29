// @flow

export type BuildsStore = {
  list: Array<any>,
  loading: boolean,
  error: boolean,
  message: any
}

export type Build = {
  branch: string,
  reponame: string, 
  user: {
    is_user: boolean,
    login: string,
    avatar_url: string,
    name: string,
    vcs_type: string,
    id: number
  },
  status: string,
  subject: string,
  body: string,
  start_time: string,
  stop_time: string,
  ssh_disabled: boolean,
  build_time_millis: number,
  messages: Array<any>,
  outcome: string,
  failed: boolean
}

export type Builds = Array<Build>

export const BuildsActionType = {
  FETCH_BUILDS: 'FETCH_BUILDS',
  FETCH_BUILDS_SUCCESS: 'FETCH_BUILDS_SUCCESS',
  FETCH_BUILDS_FAILURE: 'FETCH_BUILDS_FAILURE',
  FETCH_BUILDS_BY_BRANCH: 'FETCH_BUILDS_BY_BRANCH',
  FETCH_BUILDS_BY_BRANCH_SUCCESS: 'FETCH_BUILDS_BY_BRANCH_SUCCESS',
  FETCH_BUILDS_BY_BRANCH_FAILURE: 'FETCH_BUILDS_BY_BRANCH_FAILURE',
}

export type FETCH_BUILDS = { type: 'FETCH_BUILDS' }
export type FETCH_BUILDS_SUCCESS = { type: 'FETCH_BUILDS_SUCCESS' }
export type FETCH_BUILDS_FAILURE = { type: 'FETCH_BUILDS_FAILURE' }
export type FETCH_BUILDS_BY_BRANCH = { type: 'FETCH_BUILDS_BY_BRANCH', payload: string }
export type FETCH_BUILDS_BY_BRANCH_SUCCESS = { type: 'FETCH_BUILDS_BY_BRANCH_SUCCESS', payload: string }
export type FETCH_BUILDS_BY_BRANCH_FAILURE = { type: 'FETCH_BUILDS_BY_BRANCH_FAILURE' }

export type BuildsAction =
| FETCH_BUILDS
| FETCH_BUILDS_SUCCESS
| FETCH_BUILDS_FAILURE
| FETCH_BUILDS_BY_BRANCH
| FETCH_BUILDS_BY_BRANCH_SUCCESS
| FETCH_BUILDS_BY_BRANCH_FAILURE
