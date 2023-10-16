import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const mockState = fromJS({
    notifications: {
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: "default", value: "Message One" },
        2: { id: 2, isRead: true, type: "urgent", value: "Message Two" },
        3: { id: 3, isRead: false, type: "default", value: "Message Three" },
      }
    }
  });

  it('should return the filter type', () => {
    expect(filterTypeSelected(mockState)).toEqual('DEFAULT');
  });

  it('should return all notifications', () => {
    const expected = fromJS({
      1: { id: 1, isRead: false, type: "default", value: "Message One" },
      2: { id: 2, isRead: true, type: "urgent", value: "Message Two" },
      3: { id: 3, isRead: false, type: "default", value: "Message Three" },
    });
    expect(getNotifications(mockState)).toEqual(expected);
  });

  it('should return unread notifications', () => {
    const expected = fromJS({
      1: { id: 1, isRead: false, type: "default", value: "Message One" },
      3: { id: 3, isRead: false, type: "default", value: "Message Three" },
    });
    expect(getUnreadNotifications(mockState)).toEqual(expected);
  });
});
