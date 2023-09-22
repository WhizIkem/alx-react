import { 
  login, 
  logout, 
  displayNotificationDrawer, 
  hideNotificationDrawer 
} from './uiActionCreators';

import { 
  LOGIN, 
  LOGOUT, 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER 
} from './uiActionTypes';

describe('uiActionCreators', () => {

  it('login action creator returns expected action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const result = login(email, password);
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(result).toEqual(expectedAction);
  });

  it('logout action creator returns expected action', () => {
    const result = logout();
    const expectedAction = {
      type: LOGOUT
    };
    expect(result).toEqual(expectedAction);
  });

  it('displayNotificationDrawer action creator returns expected action', () => {
    const result = displayNotificationDrawer();
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(result).toEqual(expectedAction);
  });

  it('hideNotificationDrawer action creator returns expected action', () => {
    const result = hideNotificationDrawer();
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(result).toEqual(expectedAction);
  });
});
