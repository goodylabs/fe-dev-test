// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Breadcrumb, Icon } from 'antd';

// styles
import 'antd/lib/button/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/breadcrumb/style/css';
import 'antd/lib/divider/style/css';
import '../styles/app.scss';

import initApplication from '../actions/app/';
import PageHeader from '../components/base/PageHeader';
import { appRoutes } from './../AppRoutes';

type AppPropsType = {
  children: Function,
  dispatch: Function,
  routes: Array<Object>,
};

/**
 * Main container in app.
 *
 * @class App
 * @extends {React.Component<AppPropsType>}
 */
@connect((): {} => ({}))
class App extends React.Component<AppPropsType> {
  /**
   * Component Did Mount lifecycle method
   * Dispatches action 'initApplication'
   *
   * @memberof App
   */
  componentDidMount() {
    this.props.dispatch(initApplication());
  }

  /**
   * Generate breadcrumbs from props.routes array.
   *
   * @returns {Array} routes
   * @memberof App
   */
  generateBreadcrumbs = (): Array<Object> => {
    const { routes } = this.props;
    const appRoutesArr = Object.keys(appRoutes).map((route: string): Object => appRoutes[route]);

    return routes
      .filter((route: Object): boolean => route.path)
      .map((route: Object): Object => appRoutesArr.find((x: Object): boolean => route.path === x.path) || {});
  }

  /**
   *
   *
   * @returns {?React$Element<any>}
   * @memberof App
   */
  render(): ?React$Element<any> {
    const { children } = this.props;
    const breadcrumbs = this.generateBreadcrumbs();
    return (
      <div className="page-wrapper l-wrapper">
        {/* $FlowIssue */}
        <PageHeader />
        <Breadcrumb separator=">">
          {breadcrumbs.length > 1 ? breadcrumbs.map((breadcrumbItem: Object): React$Element<any> =>
            <Breadcrumb.Item><Link to={breadcrumbItem.path}>{breadcrumbItem.path === '/' ? <Icon type="home" /> : breadcrumbItem.name}</Link></Breadcrumb.Item>)
          : null}
        </Breadcrumb>
        <div className="page-content">
          {children}
        </div>
      </div>
    );
  }
}


export default App;
