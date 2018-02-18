// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { appRoutes } from '../../AppRoutes';

class PageHeader extends Component {
  render() {

    return (
      <header className="page-header">
        <Link to="/">
          <img src="/images/goodylabs-logo.svg" alt="Goodylabs" className="page-header__logo" />
        </Link>
        <ul className="main-navigation">
          <li className="main-navigation__item">
            <IndexLink to="/" activeClassName="main-navigation__item--active">home</IndexLink>
          </li>
          <li className="main-navigation__item">
            <Link activeClassName="main-navigation__item--active" to={appRoutes.users}>users</Link>
          </li>
          <li className="main-navigation__item">
            <Link activeClassName="main-navigation__item--active" to={appRoutes.signup}>sign up</Link>
          </li>
          <li className="main-navigation__item">
            <Link activeClassName="main-navigation__item--active" to={appRoutes.contact}>contact</Link>
          </li>
        </ul>
      </header>
    );
  }
}

PageHeader.propTypes = {
};

export default PageHeader;

