import { ACTIONS } from '../actions/UserActions';

const initialState = {
  user: null,
  list: [],
  error: false,
  message: null,
  loading: true
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.GET_USER:
      return {
        ...state,
        error: false,
        message: null,
        loading: true,
        user: null
      }
    case ACTIONS.GET_USER_SUCCESS:
      return {
        ...state,
        error: false,
        message: 'User fetched.',
        loading: false,
        user: action.data.data
      }
    case ACTIONS.GET_USER_FAILURE:
      return {
        ...state,
        data: action.data,
        error: true,
        message: action.data,
        loading: false
      }
      case ACTIONS.GET_USERS:
      return {
        ...state,
        error: false,
        message: null,
        loading: true,
        list: []
      }
    case ACTIONS.GET_USERS_SUCCESS:
      return {
        ...state,
        error: false,
        message: 'User fetched.',
        loading: false,
        list: action.data.data
      }
    case ACTIONS.GET_USERS_FAILURE:
      return {
        ...state,
        list: [],
        error: true,
        message: action.data,
        loading: false
      }
      case ACTIONS.GET_USER_BY_EMAIL:
      return {
        ...state,
        error: false,
        message: null,
        loading: true,
        user: null
      }
    case ACTIONS.GET_USER_BY_EMAIL_SUCCESS:
      return {
        ...state,
        error: false,
        message: 'User fetched.',
        loading: false,
        user: action.data.data[0]
      }
    case ACTIONS.GET_USER_BY_EMAIL_FAILURE:
      return {
        ...state,
        data: null,
        error: true,
        message: action.data,
        loading: false
      }
    default:
      return state;
  }
}
