//import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../Reducers/root_reducer';

export default createStore(rootReducer, {}, applyMiddleware(thunk, logger));
