import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index) {
  return { type: SELECT_COURSE, index };
}

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index };
}

export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export function fetchCourses() {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES });

    fetch('../../dist/courses.json')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: SET_COURSES,
        data,
      });
    })
    .catch((error) => {
      console.error('Error fetching courses', error);
    });
  }
}