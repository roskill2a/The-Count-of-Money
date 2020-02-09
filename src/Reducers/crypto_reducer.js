import {CRYPTO_REQUEST_ERROR, CRYPTO_REQUEST_SUCCESS} from './types';

const cryptoReducer = (state = [], action) => {
  switch (action.type) {
    case CRYPTO_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.payload,
      });
    case CRYPTO_REQUEST_ERROR:
      return Object.assign({}, state, {
        payload: action.payload,
      });
    default:
      return state;
  }
};

export default cryptoReducer;
