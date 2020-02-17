import {combineReducers} from 'redux';

import authReducer from './auth_reducer';
import cryptoReducer from './crypto_reducer';
import sparlLineReducer from './sparkline_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cryptos: cryptoReducer,
  sparkLine: sparlLineReducer,
});

export default rootReducer;
