// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import initApplication from '../actions/app';
import PageHeader from '../components/base/PageHeader';

import '../styles/app.scss';

class App extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.initApplication();
  }

  render() {
    const { actions, children } = this.props;
    return (
      <div className="page-wrapper l-wrapper">
        <PageHeader actions={actions} />
        <div className="page-content">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};
function mapStateToProps(state) { // eslint-disable-line
  const props = {
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    initApplication
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
