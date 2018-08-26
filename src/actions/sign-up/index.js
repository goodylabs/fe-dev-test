// @flow
import axios from 'axios';
import config from 'config';
import {
  SIGNUP__SIGN_UP,
  SIGNUP__CLEAR_SIGN_UP,
} from './../const';

/**
 * signUp action
 * Sends api POST request
 */
export function signUp(payload: {
  first_name: string,
  last_name: string,
  email: string,
}): Function {
  return async (dispatch: any): Promise<any> => {
    try {
      const response = await axios.post(`${config.apiUrl}/sign-up`, { ...payload });
      dispatch(signUpSuccess(response));
    } catch (error) {
      throw error;
    }
  };
}

/**
 * signUpSuccess action
 * Saves response from 'signUp' action.
 */
export function signUpSuccess(response: Object): Object {
  return {
    type: SIGNUP__SIGN_UP,
    response,
  };
}

/**
 * clearSignUp action
 * Clears response object in store, recovers initialState.
 */
export function clearSignUp(): Object {
  return {
    type: SIGNUP__CLEAR_SIGN_UP,
  };
}

export default {};
