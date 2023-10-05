import { createSelector } from 'reselect';

const getAllNotificationsState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [getNotificationsState],
  notifications => notifications.get('filter')
);

export const getNotifications = createSelector(
  [getNotificationsState],
  notifications => notifications.get('notifications').toJS()
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  notificationsMap => notificationsMap.filter(notif => !notif.get('isRead'))
);
