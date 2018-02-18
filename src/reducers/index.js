// @flow
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { RESET_STORE } from '../actions/const';
import appReducer from './appReducer';

const applicationReducer = combineReducers({
  app: appReducer,
  form: formReducer,
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

