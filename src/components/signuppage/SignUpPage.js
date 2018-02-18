/* eslint class-methods-use-this: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import { registerUser } from '../../actions/app';

class SignUpPage extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.registerUser(values);
    browserHistory.push('/users');
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Register form</h1>
        <RegisterForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  registerUser: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  registerUser: (data) => {
    dispatch(registerUser(data));
  }
});

export default connect(null, mapDispatchToProps)(SignUpPage);
