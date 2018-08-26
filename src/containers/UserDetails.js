// @flow
import React, { Component } from 'react';
import { Button, Row, Col, Icon, Divider, Avatar, List, Spin } from 'antd';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// styles
import 'antd/lib/divider/style/css';
import 'antd/lib/avatar/style/css';
import 'antd/lib/spin/style/css';

// actions
import { getUserDetails, clearUserDetails } from './../actions/users/';


type UsersDetailsPropsType = {
  userDetails: Object,
  routeParams: Object,
  dispatch: (any) => void,
};

/**
 * The container is responsible for rendering single details user page.
 *
 * @export
 * @class UsersDetails
 * @extends {Component<UsersDetailsPropsType>}
 */
@connect((state: Object): Object => ({
  userDetails: state.app.userDetails,
}))
export class UsersDetails extends Component<UsersDetailsPropsType> {
  /**
   * Component Did Mount lifecycle method.
   * When component is mounted, we dispatch action fetching the user details data.
   * To action 'getUserDetails' passed user.id as argument (from route params).
   *
   * @memberof UsersDetails
   */
  componentDidMount() {
    const { routeParams } = this.props;
    if (routeParams) {
      this.props.dispatch(getUserDetails(Number(routeParams.id)));
    }
  }

  /**
   * Component Will Unmount lifecycle method.
   * Clear user details state on component unomounting.
   *
   * @memberof UsersDetails
   */
  componentWillUnmount() {
    this.props.dispatch(clearUserDetails());
  }

  /**
   * Back button click handler.
   * Redirect to '/users' page.
   *
   * @memberof UsersDetails
   */
  onBackBtnClick = () => {
    this.props.dispatch(push('/users'));
  }

  /**
   *
   *
   * @returns {React$Element<any>}
   * @memberof UsersDetails
   */
  render(): React$Element<any> {
    const { userDetails } = this.props;
    return (
      <div>
        <h1>User details</h1>
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <Button type="secondary" htmlType="button" size="small" onClick={this.onBackBtnClick}>
              <Icon type="left" />
              Users
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={16} xl={12}>
            <Spin spinning={!userDetails.id} tip="Loading...">
              <Avatar size={60} shape="square">
                {userDetails.first_name && userDetails.first_name.charAt(0)}
                {userDetails.last_name && userDetails.last_name.charAt(0)}
              </Avatar>
              <List
                itemLayout="horizontal"
                dataSource={[{
                  title: 'ID:',
                  value: userDetails.id,
                }, {
                  title: 'First Name:',
                  value: userDetails.first_name,
                }, {
                  title: 'Last Name:',
                  value: userDetails.last_name,
                }, {
                  title: 'Email:',
                  value: userDetails.email,
                }]}
                style={{ paddingBottom: 50 }}
                renderItem={(item: Object): React$Element<any> => (
                  <List.Item>
                    <Divider style={{ margin: '18px 0' }} />
                    <div>
                      <span>{item.title}</span>{' '}
                      <strong style={{ marginLeft: 5 }}>{item.value}</strong>
                    </div>
                  </List.Item>
                )}
              />
            </Spin>
          </Col>
        </Row>
      </div>
    );
  }
}


export default UsersDetails;
