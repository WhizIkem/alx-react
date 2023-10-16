import { combineReducers } from 'redux';
import courseReducer from './courseReducer'; // Import your course reducer
import notificationReducer from './notificationReducer'; // Import your notification reducer
import uiReducer from './uiReducer'; // Import your UI reducer

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
