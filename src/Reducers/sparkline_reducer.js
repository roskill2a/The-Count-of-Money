import {
  CRYPTO_PCE_EVOL_REQUEST_ERROR,
  CRYPTO_PCE_EVOL_REQUEST_SUCCESS,
} from './types';

const sparlLineReducer = (state = [], action) => {
  switch (action.type) {
    case CRYPTO_PCE_EVOL_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.payload,
      });
    case CRYPTO_PCE_EVOL_REQUEST_ERROR:
      return Object.assign({}, state, {
        payload: action.payload,
      });
    default:
      return state;
  }
};

export default sparlLineReducer;
