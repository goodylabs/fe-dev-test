import React from 'react';
import PropTypes from 'prop-types';

const User = user => (
  <div className="row">
    <hr style={{width: '100%', color: 'lightgray', height: '0.5px'}}/>
    <div className="col-sm-2">ID: {user.id}</div>
    <div className="col-sm-3">{user.first_name}</div>
    <div className="col-sm-3">{user.last_name}</div>
    <div className="col-sm-3">{user.email}</div>
  </div>
);

export default User;

User.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string
};
