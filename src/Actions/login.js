import AsyncStorage from '@react-native-community/async-storage';
import {LOGIN_ERROR, LOGIN_SUCCESS} from '../Reducers/types';

function setLoginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

function setLoginError(loginError) {
  return {
    type: LOGIN_ERROR,
    payload: loginError,
  };
}

export function login(email, password) {
  return async dispatch => {
    try {
      let response = await fetch('http://185.216.25.54:8082/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.success) {
        dispatch(setLoginSuccess(responseJson));
        await AsyncStorage.setItem('token', responseJson.token);
      } else {
        dispatch(setLoginError(responseJson));
      }
    } catch (error) {
      console.error('error', error);
    }
  };
}
