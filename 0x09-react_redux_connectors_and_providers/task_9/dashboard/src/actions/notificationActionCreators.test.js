import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter
} from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('markAsAread action creator returns expected action', () => {
    const result = markAsAread(1);
    const expectedAction = {
      type: MARK_AS_READ,
      index: 1
    };
    expect(result).toEqual(expectedAction);
  });

  it('setNotificationFilter action creator returns expected action', () => {
    const result = setNotificationFilter(NotificationTypeFilters.URGENT);
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT
    };
    expect(result).toEqual(expectedAction);
  });

});
