import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from './notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      filter: 'DEFAULT',
      notifications: []
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const mockData = [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: mockData
    };
    expect(notificationReducer(undefined, action)).toEqual({
      filter: 'DEFAULT',
      notifications: mockData.map(notification => ({
        ...notification,
        isRead: false
      }))
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        }
      ]
    };
    const action = {
      type: MARK_AS_READ,
      index: 2
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: true
        }
      ]
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    expect(notificationReducer(undefined, action)).toEqual({
      filter: 'URGENT',
      notifications: []
    });
  });
});
