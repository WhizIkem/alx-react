import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import notificationReducer, { initialState } from "./notificationReducer";
import { setLoadingState, setNotifications } from "../actions/notificationActionCreators";
import { fromJS } from "immutable";

describe("courseReducer", () => {
  it('returns the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ]
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("notificationReducer", () => {
  it('should handle SET_LOADING_STATE', () => {
    const state = notificationReducer(initialState, setLoadingState(true));
    expect(state.get('isLoading')).toEqual(true);
  });

  it('should handle SET_NOTIFICATIONS', () => {
    const Notifications = [{ id: 1, text: 'Notification 1' }, { id: 2, text: 'Notification 2' }];
    const state = notificationReducer(initialState, setNotifications(Notifications));
    expect(state.get('messages').size).toEqual(2);
    expect(state.getIn(['messages', 0, 'text'])).toEqual('Notification 1');
    expect(state.getIn(['messages', 1, 'text'])).toEqual('Notification 2');
  });

});
