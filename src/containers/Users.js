// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { Table } from 'antd';
import { connect } from 'react-redux';

// styles
import 'antd/lib/table/style/css';

// actions
import { getUsers } from './../actions/users/';


type UsersPropsType = {
  users: Array<Object>,
  dispatch: (any) => void,
};

type UsersStateType = {
  loading: boolean,
};

/**
 * Container is responsible for rendering users table.
 *
 * @export
 * @class Users
 * @extends {Component<UsersPropsType, UsersStateType>}
 */
@connect((state: Object): Object => ({
  users: state.app.users,
}))
export class Users extends Component<UsersPropsType, UsersStateType> {
  /**
   * Definition of componment's state
   *
   * @memberof Users
   */
  state = {
    loading: true,
  };

  /**
   * Component Did Mount lifecycle method.
   * Fetch users data.
   *
   * @memberof Users
   */
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  /**
   * Component Will Receive Props lifecycle method.
   * This function is invoked when users are successfully fetched.
   *
   * @memberof Users
   */
  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  /**
   *
   *
   * @returns {React$Element<any>}
   * @memberof Users
   */
  render(): React$Element<any> {
    const { users } = this.props;
    const { loading } = this.state;
    const tableColumns = [{
      title: 'First name',
      dataIndex: 'first_name',
      key: 'first_name',
    }, {
      title: 'Last name',
      dataIndex: 'last_name',
      key: 'last_name',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Action',
      key: 'action',
      render: (record: Object): React$Element<any> => (
        <span>
          <Link to={`/users/${record.id}`}>Show details</Link>
        </span>
      ),
    }];
    const dataSource = users.map((user: Object, x: number): Object => ({ ...user, key: String(x) }));
    return (
      <div>
        <h1>Users</h1>
        <Table
          columns={tableColumns}
          dataSource={dataSource}
          loading={loading}
          scroll={{
            x: 500
          }}
          onRow={(row: Object): Object => ({
            onClick: (): void => this.props.dispatch(push(`/users/${row.id}`)),
            style: {
              cursor: 'pointer',
            }
          })}
        />
      </div>
    );
  }
}


export default Users;
