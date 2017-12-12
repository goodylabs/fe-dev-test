// @flow
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { RESET_STORE } from '../actions/const';

import appReducer from './appReducer';

const applicationReducer = combineReducers({
  app: appReducer,
  routing: routerReducer,
});

const rootReducer = (state: Object, action: any) => {
  let s = state;
  if (action.type === RESET_STORE) {
    s = undefined;
  }

  return applicationReducer(s, action);
};

export default rootReducer;

