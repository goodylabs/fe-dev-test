// @flow
/* eslint-disable global-require */
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';


function configureStore(): ?{} {
  const routeMiddleware = routerMiddleware(browserHistory);
  const middlewares = [thunkMiddleware, routeMiddleware];
  const env = process.env.NODE_ENV;

  if (env === 'dev') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
  // $FlowIssue
  if (module.hot) {
   // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => { // eslint-disable-line
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

// const store = ;
export default configureStore();
