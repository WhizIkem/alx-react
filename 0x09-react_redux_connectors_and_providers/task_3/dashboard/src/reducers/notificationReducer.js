import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = {
  filter: 'DEFAULT',
  notifications: []
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeIn(['notifications'], fromJS(normalizedData.entities.notifications));

    case MARK_AS_READ:
      return state.setIn(['notifications', action.index.toString(), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
      
    default:
      return state;
  }
};

export default notificationReducer;
