// @flow
import {
  INIT_APP,
  REQUEST_USERS,
  CREATE_USER,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS
} from '../actions/const';

const initialState = {
  initialized: false,
  users: [],
  isLoading: false
};

export default function(state: Object = initialState, action: Object) {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        initialized: true,
      };
    case REQUEST_USERS:
      return {
        ...state,
        isLoading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };
    case GET_USERS_FAILURE:
      return {
        ...state
      };
    case CREATE_USER: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}
