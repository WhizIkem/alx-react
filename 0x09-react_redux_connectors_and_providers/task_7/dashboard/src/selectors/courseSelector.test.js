import { List, Map } from 'immutable';
import { getAllCourses } from './courseSelectors';

describe('course selectors', () => {
  it('should select all courses as List', () => {
    const state = Map({
      courses: Map({
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2' },
      }),
    });

    const selectedCourses = getAllCourses(state);
    const expectedCourses = List([
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ]);

    expect(List.isList(selectedCourses)).toBe(true);
    expect(selectedCourses).toEqual(expectedCourses);
  });
});
