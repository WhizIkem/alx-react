import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('When isHeader is false renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="ES6" textSecondCell="60" />);
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(2);
  });

  it('When isHeader is true and textSecondCell is null renders one th element', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('th')).toHaveLength(1);
  });

  it('When isHeader is true and textSecondCell is present renders two th elements', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />);
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('th')).toHaveLength(2);
  });
});
