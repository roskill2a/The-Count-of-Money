import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from './types';

const INITIAL_STATE = {
  isAuthenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        payload: action.payload,
      });
    case REGISTER_ERROR:
      return Object.assign({}, state, {
        payload: action.payload,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        payload: action.payload,
        isAuthenticated: true,
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        payload: action.payload,
        isAuthenticated: false,
      });
    case LOGOUT_REQUEST:
      return [...INITIAL_STATE];
    default:
      return state;
  }
};

export default authReducer;
