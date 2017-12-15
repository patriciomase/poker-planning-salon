// import { combineReducers } from 'redux';

import queryReducer from './reducer_queries';

import {
  users
} from './users';

import {
  currentTicketName,
  defaultUserName,
  userName
} from './ui';

const rootReducer = {
  queries: queryReducer,

  defaultUserName,
  userName,
  
  currentTicketName,
  users
};

export default rootReducer;
