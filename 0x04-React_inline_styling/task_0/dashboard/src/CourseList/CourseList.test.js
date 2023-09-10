import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  describe('With CourseList Empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders CourseList without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders 1 header row and 1 "No course available yet" row', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(2);
    });
  });

  describe('With CourseList containing elements', () => {
    let wrapper;
    const courses = [
      { id: 1, name: 'Course A', credit: 3 },
      { id: 2, name: 'Course B', credit: 4 },
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it('renders CourseList without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct number of rows', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(courses.length + 1);
    });
  });

  describe('With Default Properties', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList />);
    });

    it('renders CourseList without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders 1 header row and 1 "No course available yet" row', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(2);
    });
  });
});
