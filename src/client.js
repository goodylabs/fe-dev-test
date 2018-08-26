// @flow
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import store from './stores';
import { routes } from './AppRoutes';

const history = syncHistoryWithStore(browserHistory, store);
const app = document.getElementById('app');
if (app) {
  render(
    <Provider store={store} warnings={false}>
      <Router
        routes={routes()}
        history={history}
        // $FlowIssue
        getState={store.getState}
      />
    </Provider>,
    app
  );
}
