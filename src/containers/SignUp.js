// @flow
import React from 'react';
import { Link } from 'react-router';
import { Form, Input, Button, Row, Col, Card, Divider, Alert, Icon } from 'antd';
import { connect } from 'react-redux';

// styles
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/alert/style/css';

// actions
import { signUp, clearSignUp } from './../actions/sign-up';

type SignUpPropsType = {
  dispatch: (any) => void,
  signUp: Object,
  form: {
    getFieldDecorator: Function,
    validateFieldsAndScroll: (Function) => void
  }
};

type SignUpStateType = {
  loading: boolean,
};

/**
 * Sign up container provides users ability to register.
 *
 * @export
 * @class SignUp
 * @extends {Component<SignUpPropsType, SignUpStateType>}
 */
@connect((state: Object): Object => ({
  signUp: state.app.signUp,
}))
@Form.create()
class SignUp extends React.Component<SignUpPropsType, SignUpStateType> {
  /**
   * State of component
   *
   * @memberof SignUp
   */
  state = {
    loading: false,
  }

  /**
   * Component Will Receive Props lifecycle method
   * When response from signing up come, set 'loading' to false.
   *
   * @param {Object} nextProps
   * @memberof SignUp
   */
  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.signUp.status) {
      this.setState({ loading: false });
    }
  }

  /**
   * Component Will Unmount lifecycle method
   * Clear signUp object when component unmount.
   *
   * @memberof SignUp
   */
  componentWillUnmount() {
    this.props.dispatch(clearSignUp());
  }

  /**
   * Handle submit method.
   * Validate all fileds in form. Scroll to out of view inputs if have errors.
   * Dispatches signUp action.
   *
   * @param {Object} e
   * @memberof SignUp
   */
  handleSubmit = (e: Object) => {
    e.preventDefault();
    const { form } = this.props;
    this.setState({ loading: false });
    form.validateFieldsAndScroll((err: ?Object, values: {
      firstName: string,
      lastName: string,
      email: string,
    }) => {
      if (err) return;
      this.props.dispatch(signUp({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
      }));
      this.setState({ loading: true });
    });
  }

  /**
   *
   *
   * @returns {React$Element<any>}
   * @memberof SignUp
   */
  render(): React$Element<any> {
    const { loading } = this.state;
    const { signUp: signUpResponse } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row type="flex" justify="center">
          <Col xs={24} sm={14} lg={10} xl={10}>
            <Card className="sign-up__card">
              <h1>Sign up</h1>
              <p>Registration confirmation will be emailed to you.</p>
              <Divider />
              {signUpResponse.status !== 'ok' ? (
                <div>
                  <Form.Item>
                    {getFieldDecorator('firstName', {
                      rules: [{ required: true, message: 'Please input your first name!' }],
                    })(
                      <Input placeholder="First name" />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('lastName', {
                      rules: [{ required: true, message: 'Please input your last name!' }],
                    })(
                      <Input placeholder="Last name" />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('email', {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'The input is not valid email!' }
                      ],
                    })(
                      <Input placeholder="Email" />
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      block
                      loading={loading}
                    >
                      Sign up
                    </Button>
                    <div>
                      Already signed up? <a href="">Sign in!</a>
                    </div>
                  </Form.Item>
                </div>
              ) : (
                <div>
                  <Alert
                    message="You have signed up successfully!"
                    description="Thank you for being goodyfan. Please check your mailbox for activation."
                    type="success"
                    showIcon
                  />
                  <div style={{ marginTop: 15 }}>
                    <Link to="/"><Icon type="left" />Back to homepage</Link>
                  </div>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SignUp;

