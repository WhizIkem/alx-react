import { createSelector } from 'reselect';
import { List } from 'immutable';

// Select the course entities from the course reducer
const courseEntitiesSelector = (state) => state.get('courses');

// Create a selector to return the course entities as a List
export const getAllCourses = createSelector(
  [courseEntitiesSelector],
  (courses) => List(courses.valueSeq())
);
