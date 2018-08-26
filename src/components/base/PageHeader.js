// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Affix } from 'antd';

// styles
import 'antd/lib/affix/style/css';

import { appRoutes } from '../../AppRoutes';

type PageHeaderPropsType = {
  pathname: string,
};

/**
 * Renders page header of app.
 *
 * @class PageHeader
 * @extends {React.Component<PageHeaderPropsType>}
 */
@connect((state: object): {
  pathname: string,
} => ({
  pathname: state.routing.locationBeforeTransitions.pathname || '',
}))
class PageHeader extends React.Component<PageHeaderPropsType> {
  /**
   * Render single nav item.
   *
   * @returns {React$Element<any>}
   * @memberof PageHeader
   */
  renderNavItem = ({
    path,
    name,
    key,
  }: {
    path: string,
    name: string,
    key: number,
  } = {}): React$Element<any> => (
    <li key={key} className={`main-navigation__item ${this.props.pathname.includes(path) ? 'active' : ''}`}>
      <Link to={path}>{name}</Link>
    </li>
  )

  /**
   *
   *
   * @returns {?React$Element<any>}
   * @memberof PageHeader
   */
  render(): ?React$Element<any> {
    const menuData = Object.keys(appRoutes)
      .map((route: string): Object => appRoutes[route])
      .filter((route: Object): boolean => !route.noMenu);
    return (
      <header className="page-header">
        <Link to="/">
          <img src="/images/goodylabs-logo.svg" alt="Goodylabs" className="page-header__logo" />
        </Link>
        <Affix offsetTop={-15} style={{ width: '100%' }}>
          <ul className="main-navigation">
            {menuData.map((menuItem: Object, i: number): React$Element<any> => this.renderNavItem(({ ...menuItem, key: i })))}
          </ul>
        </Affix>
      </header>
    );
  }
}

export default PageHeader;

