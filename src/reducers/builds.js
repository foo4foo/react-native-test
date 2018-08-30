// @flow
import { BuildsActionType as ACTIONS } from '../types/builds';
import type { Action } from '../types/index';
import type { BuildsStore } from '../types/builds';
import { fromJS } from 'immutable';

const initialState = fromJS({
  list: [],
  error: false,
  message: null,
  loading: true
});

export default (state: BuildsStore = initialState, action: Action) => {
  switch(action.type) {
    case ACTIONS.FETCH_BUILDS:
      return state;
      // return state.merge({
      //   error: false,
      //   message: null,
      //   loading: true,
      //   list: []
      // })
    case ACTIONS.FETCH_BUILDS_SUCCESS:
      return state;
      // state = state.set('list', action.data.data);
      // state = state.set('loading', false);
      // state = state.set('error', false);
      // return state;
    case ACTIONS.FETCH_BUILDS_FAILURE:
      return state.set('error', true);
    case ACTIONS.FETCH_BUILDS_BY_BRANCH:
        return state.merge({
          error: false,
          message: null,
          loading: true,
          list: []
        })
    case ACTIONS.FETCH_BUILDS_BY_BRANCH_SUCCESS:
      state = state.set('list', action.data.data);
      state = state.set('loading', false);
      state = state.set('error', false);
      return state;
      // {
      //   ...state,
      //   error: false,
      //   message: null,
      //   loading: false,
      //   list: action.data.data
      // }
    case ACTIONS.FETCH_BUILDS_BY_BRANCH_FAILURE:
      return state.set('error', true);
    default:
      return state;
  }
}
