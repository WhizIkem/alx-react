import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {
  return (
    <table>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
      </thead>
      <tbody>
        {listCourses && listCourses.length > 0 ? (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              id={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        ) : (
          <CourseListRow
            textFirstCell='No course available yet'
            isHeader={false}
          />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

export default CourseList;
