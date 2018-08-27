export const ACTIONS = {
  GET_USER: "users/GET_USER",
  GET_USER_SUCCESS: "users/GET_USER_SUCCESS",
  GET_USER_FAILURE: "users/GET_USER_FAILURE",
  GET_USERS: "users/GET_USERS",
  GET_USERS_SUCCESS: "users/GET_USERS_SUCCESS",
  GET_USERS_FAILURE: "users/GET_USERS_FAILURE",
  GET_USER_BY_EMAIL: "users/GET_USER_BY_EMAIL",
  GET_USER_BY_EMAIL_SUCCESS: "users/GET_USER_BY_EMAIL_SUCCESS",
  GET_USER_BY_EMAIL_FAILURE: "users/GET_USER_BY_EMAIL_FAILURE"
};

export const getUser = (userId) => ({ type: ACTIONS.GET_USER, payload: userId });
export const getUserSuccess = (userId) => ({ type: ACTIONS.GET_USER_SUCCESS, payload: userId });
export const getUserFailure = () => ({ type: ACTIONS.GET_USER_FAILURE });

export const getUsers = () => ({ type: ACTIONS.GET_USERS });
export const getUsersSuccess = () => ({ type: ACTIONS.GET_USERS_SUCCESS });
export const getUsersFailure = () => ({ type: ACTIONS.GET_USERS_FAILURE });

export const getUserByEmail = (email) => ({ type: ACTIONS.GET_USER_BY_EMAIL, payload: email });
export const getUserByEmailSuccess = (email) => ({ type: ACTIONS.GET_USER_BY_EMAIL_SUCCESS, payload: email });
export const getUserByEmailFailure = () => ({ type: ACTIONS.GET_USER_BY_EMAIL_FAILURE });
