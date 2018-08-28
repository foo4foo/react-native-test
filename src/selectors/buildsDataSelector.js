// @flow
import { createSelector } from 'reselect';

const getBuilds = (state) => state.builds.list;

export const getBuildsSelector = createSelector(
  getBuilds,
  (builds) => builds
)
