import { createSelector } from 'reselect';

const getNotificationsState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [getNotificationsState],
  notifications => notifications.get('filter')
);

export const getNotifications = createSelector(
  [getNotificationsState],
  notifications => notifications.get('notifications').toJS()
);

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, filterTypeSelected],
  (notifications, filter) => {
    return notifications.filter(
      notif => !notif.get('isRead') && (filter === 'urgent' ? notif.get('type') === 'urgent' : true)
    );
  }
);