import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';
import fetch from 'node-fetch';

// Action creator for login
export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
}

// Action creator for logout
export function logout() {
  return {
    type: LOGOUT
  };
}

// Action creator for displaying the notification drawer
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

// Action creator for hiding the notification drawer
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

// Action creator for login success
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

// Action creator for login failure
export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

// Async action creator for login request
export function loginRequest(email, password) {
  return (dispatch) => {
    // Dispatch the login action
    dispatch(login(email, password));

    // Perform the asynchronous operation (e.g., fetching data)
    return fetch('http://localhost:8564/login-success.json')
      .then((res) => res.json())
      .then((json) => {
        // Dispatch login success action
        dispatch(loginSuccess());
      })
      .catch((error) => {
        // Dispatch login failure action
        dispatch(loginFailure());
      });
  };
}
