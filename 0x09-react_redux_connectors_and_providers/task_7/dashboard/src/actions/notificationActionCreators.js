import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    isLoading
  };
}

export const boundSetLoadingState = (isLoading) => dispatch(setLoadingState(isLoading));

export function setNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notifications
  };
}

export const boundSetNotifications = (notifications) => dispatch(setNotifications(notifications));

export function fetchNotifications() {
  return (dispatch) => {
    // Set loading state to true
    dispatch(setLoadingState(true));

    // Simulate fetching data from /notifications.json
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the data to setNotifications
        dispatch(setNotifications(data));

        // Set loading state to false
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        // Handle error if needed and set loading state to false
        dispatch(setLoadingState(false));
      });
  };
}