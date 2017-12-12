// @flow
import {
  INIT_APP,
} from '../actions/const';


const initialState = {
  initialized: false
};

export default function(state: Object = initialState, action: Object) {
  switch (action.type) {
    case INIT_APP: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
}
