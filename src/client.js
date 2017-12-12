// @flow
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import store from './stores';
import { routes } from './AppRoutes';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store} warnings={false}>
    <Router
      routes={routes(store)}
      history={history}
      getState={store.getState} />
  </Provider>,

  document.getElementById('app')
);
