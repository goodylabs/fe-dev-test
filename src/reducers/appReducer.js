// @flow
import {
  INIT_APP,
  USERS__GET_USERS,
  USERS__GET_USER_DETAILS,
  USERS__CLEAR_USER_DETAILS,
  SIGNUP__SIGN_UP,
  SIGNUP__CLEAR_SIGN_UP,
} from '../actions/const';


const initialState = {
  initialized: false,
  users: [],
  userDetails: {},
  signUp: {},
};

export default function(state: Object = initialState, action: Object): {
  initialized: boolean,
  users: Array<Object>,
  userDetails: Object,
} {
  switch (action.type) {
    case INIT_APP:
      return { ...state, initialized: true };
    case USERS__GET_USERS:
      return { ...state, users: action.response.data || [] };
    case USERS__GET_USER_DETAILS:
      return { ...state, userDetails: action.response.data || {} };
    case USERS__CLEAR_USER_DETAILS:
      return { ...state, userDetails: initialState.userDetails };
    case SIGNUP__SIGN_UP:
      return { ...state, signUp: action.response.data || {} };
    case SIGNUP__CLEAR_SIGN_UP:
      return { ...state, signUp: initialState.signUp };
    default: {
      return state;
    }
  }
}
