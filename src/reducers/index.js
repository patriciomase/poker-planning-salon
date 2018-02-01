// import { combineReducers } from 'redux';

import queryReducer from './reducer_queries';

import {
  users
} from './users';

import {
  currentTicketName,
  userName
} from './ui';

const rootReducer = {
  queries: queryReducer,

  userName,
  
  currentTicketName,
  users
};

export default rootReducer;
