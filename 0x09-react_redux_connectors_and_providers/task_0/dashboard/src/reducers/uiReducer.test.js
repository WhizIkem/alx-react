import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  SELECT_COURSE
} from "../actions/uiActionTypes";
import { Map } from "immutable";

// Initial state for the UI reducer
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({})
});

describe("uiReducer", () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' }).toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual(expectedState.toJS());
  });
});
