// @flow
import { combineReducers } from 'redux';
import users from './users';
import builds from './builds';

const RootReducer = combineReducers({
    users,
    builds
});

export { RootReducer };
