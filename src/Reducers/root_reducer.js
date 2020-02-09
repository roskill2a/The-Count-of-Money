import {combineReducers} from 'redux';

import authReducer from './auth_reducer';
import cryptoReducer from './crypto_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cryptos: cryptoReducer,
});

export default rootReducer;
