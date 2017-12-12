// @flow
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { routerActions } from 'react-router-redux';

import App from './containers/App';
import NotFound from './containers/NotFound';
import HomePage from './components/homepage';
import ContactPage from './containers/Contact';

const appRoutes = {
  base: '/',
  contact: '/contact',
  wildcard: '*',
};

function routes() {
  const history = browserHistory;
  // const connect = fn => (nextState, replaceState) => fn(store, nextState, replaceState);

  return (
    <Router history={history}>
      <Route path={appRoutes.base} component={App}>
        <IndexRoute component={HomePage} />

        <Route path={appRoutes.contact} component={ContactPage} />
        <Route path={appRoutes.wildcard} component={NotFound} />
      </Route>
    </Router>
  );
}

export {
  appRoutes,
  routes
};
