// @flow
import axios from 'axios';
import config from 'config';
import {
  USERS__GET_USERS,
  USERS__GET_USER_DETAILS,
  USERS__CLEAR_USER_DETAILS,
} from './../const';


/**
 * getUsers action
 * Fetches users data.
 */
export function getUsers(): Function {
  return async (dispatch: any): Promise<any> => {
    try {
      const response = await axios.get(`${config.apiUrl}/users`);
      dispatch(getUsersSuccess(response));
    } catch (error) {
      throw error;
    }
  };
}

/**
 * getUsersSuccess action.
 * Saves response from 'getUsers' action in store.
 */
export function getUsersSuccess(response: Object): Object {
  return {
    type: USERS__GET_USERS,
    response,
  };
}

/**
 * getUserDetails action
 * Fetches single user.
 */
export function getUserDetails(id: number): Function {
  return async (dispatch: any): Promise<any> => {
    try {
      const response = await axios.get(`${config.apiUrl}/users/${id}`);
      dispatch(getUserDetailsSuccess(response));
    } catch (error) {
      throw error;
    }
  };
}

/**
 * getUserDetailsSuccess action
 * Saves response from 'fetUserDetails' action
 */
export function getUserDetailsSuccess(response: Object): Object {
  return {
    type: USERS__GET_USER_DETAILS,
    response,
  };
}

/**
 * clearUserDetials action
 * Clears response object and recover initailState.
 */
export function clearUserDetails(): Object {
  return {
    type: USERS__CLEAR_USER_DETAILS,
  };
}

export default {};
