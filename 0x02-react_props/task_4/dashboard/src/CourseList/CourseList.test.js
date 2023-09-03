import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('CourseList Component', () => {
  it('renders CourseList without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});