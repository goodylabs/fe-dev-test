// @flow
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { routerActions } from 'react-router-redux';

import App from './containers/App';
import NotFound from './containers/NotFound';
import HomePage from './components/homepage';
import ContactPage from './containers/Contact';
import UsersPage from './containers/Users';
import UserDetailsPage from './containers/UserDetails';
import SignUpPage from './containers/SignUp';

const appRoutes = {
  HOME: {
    name: 'Home',
    path: '/',
    component: App,
    noMenu: true,
  },
  USERS: {
    name: 'Users',
    path: '/users',
    component: UsersPage,
  },
  USER_DETAILS: {
    name: 'User details',
    path: '/users/:id',
    component: UserDetailsPage,
    noMenu: true,
  },
  SIGN_UP: {
    name: 'Sign up',
    path: '/sign-up',
    component: SignUpPage,
  },
  CONTACT: {
    name: 'Contact',
    path: '/contact',
    component: ContactPage,
  },
};

function routes(): React$Element<any> {
  const history = browserHistory;
  // const connect = fn => (nextState, replaceState) => fn(store, nextState, replaceState);

  return (
    <Router history={history}>
      <Route path={appRoutes.HOME.path} component={appRoutes.HOME.component}>
        <IndexRoute component={HomePage} />

        <Route path={appRoutes.USERS.path} component={appRoutes.USERS.component} />
        <Route path={appRoutes.USER_DETAILS.path} component={appRoutes.USER_DETAILS.component} />
        <Route path={appRoutes.CONTACT.path} component={appRoutes.CONTACT.component} />
        <Route path={appRoutes.SIGN_UP.path} component={appRoutes.SIGN_UP.component} />

        <Route path={'*'} component={NotFound} />
      </Route>
    </Router>
  );
}

export {
  appRoutes,
  routes
};
