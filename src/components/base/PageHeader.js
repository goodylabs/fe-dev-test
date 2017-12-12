// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router';
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
            <Link to="/">users</Link>
          </li>
          <li className="main-navigation__item">
            <Link to="/">sign up</Link>
          </li>
          <li className="main-navigation__item">
            <Link to={appRoutes.contact}>contact</Link>
          </li>
        </ul>
      </header>
    );
  }
}

PageHeader.propTypes = {
};

export default PageHeader;

