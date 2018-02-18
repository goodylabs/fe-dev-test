import {
  INIT_APP,
  REQUEST_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  CREATE_USER,
  apiUsers } from './const';

const initApplication = () => ({ type: INIT_APP });
export default initApplication;

export const requestUsers = () => ({ type: REQUEST_USERS });
export const getUsersSuccess = users => ({ type: GET_USERS_SUCCESS, payload: users });
export const getUsersFailure = response => ({ type: GET_USERS_FAILURE, payload: response });
export const createUser = () => ({ type: CREATE_USER });

export const fetchUsers = () => (dispatch) => {
  dispatch(requestUsers());
  fetch(apiUsers)
  .then(
    res => res.json(),
  )
  .then(json => dispatch(getUsersSuccess(json)));
};

export const registerUser = body => (dispatch) => {
  dispatch(requestUsers());
  const newUser = body;
  newUser.id = Math.floor(Math.random() * 1000) + 1;
  fetch(apiUsers, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.json())
  .then(() => dispatch(createUser()));
};
