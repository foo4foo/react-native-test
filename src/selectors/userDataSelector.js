// @flow
import { createSelector } from 'reselect'

const getUser = (state) => state.users.user

export const getUserSelector = createSelector(
  getUser,
  (user) => user
)
