import { combineReducers } from 'redux';

import queryReducer from './reducer_queries';

import {
  users
} from './users';

const rootReducer = {
  queries: queryReducer,
  
  users
};

export default rootReducer;
