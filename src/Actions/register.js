import {REGISTER_ERROR, REGISTER_SUCCESS} from '../Reducers/types';

function setRegisterSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
}

function setRegisterError(loginError) {
  return {
    type: REGISTER_ERROR,
    payload: loginError,
  };
}

export function register(email, firstName, lastName, password) {
  return async dispatch => {
    try {
      let response = await fetch('http://185.216.25.54:8082/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
        }),
      });
      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.success) {
        dispatch(setRegisterSuccess(responseJson));
      } else {
        dispatch(setRegisterError(responseJson));
      }
    } catch (error) {
      console.error('error', error);
    }
  };
}
