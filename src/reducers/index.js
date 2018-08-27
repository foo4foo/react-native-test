// @flow
import { combineReducers } from 'redux';
import users from './users';

const RootReducer = combineReducers({
    users     
});

export { RootReducer };
