import { combineReducers } from 'redux';

import queryReducer from './reducer_queries';

import {
  users
} from './users';

import {
  userName
} from './ui';

const rootReducer = {
  queries: queryReducer,
  
  userName,
  users
};

export default rootReducer;
