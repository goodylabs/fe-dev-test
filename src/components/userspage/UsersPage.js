import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import User from './User';
import { fetchUsers } from '../../actions/app';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { isLoading, users } = this.props;
    return (
      <div>
        <h1>Users list</h1>
        {isLoading ?
          <h2 className="text-center">Loading...</h2> :
          users.map((user, i) => <User key={i} {...user}/>)
        }
      </div>
    );
  }
}

UsersPage.propTypes = {
  fetchUsers: PropTypes.func,
  isLoading: PropTypes.bool,
  users: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  }
});

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  users: state.app.users
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
