// @flow
import { BuildsActionType as ACTIONS } from '../types/builds';
import type { Action } from '../types/index';
import type { BuildsStore } from '../types/builds';

const initialState = {
  list: [],
  error: false,
  message: null,
  loading: true
}

export default (state: BuildsStore = initialState, action: Action) => {
  switch(action.type) {
    case ACTIONS.FETCH_BUILDS:
      return {
        ...state,
        error: false,
        message: null,
        loading: true,
        list: []
      }
    case ACTIONS.FETCH_BUILDS_SUCCESS:
      return {
        ...state,
        error: false,
        message: null,
        loading: false,
        list: action.data.data
      }
    case ACTIONS.FETCH_BUILDS_FAILURE:
      return {
        ...state,
        error: true,
        message: action.data,
        loading: false,
        list: []
      }
    default:
      return state;
  }
}
