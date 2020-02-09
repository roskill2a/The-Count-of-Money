import {CRYPTO_REQUEST_SUCCESS, CRYPTO_REQUEST_ERROR} from '../Reducers/types';

function setRequestSuccess(data) {
  return {
    type: CRYPTO_REQUEST_SUCCESS,
    payload: data,
  };
}

function setRequestError(loginError) {
  return {
    type: CRYPTO_REQUEST_ERROR,
    payload: loginError,
  };
}

export function getListCryptos() {
  return async dispatch => {
    try {
      let response = await fetch('http://185.216.25.54:8082/api/crypto', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.success) {
        dispatch(setRequestSuccess(responseJson));
      } else {
        dispatch(setRequestError(responseJson));
      }
    } catch (error) {
      console.error('error', error);
    }
  };
}
