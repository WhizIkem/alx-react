import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

it('renders without crashing', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.exists()).toEqual(true);
});

it('renders two input tags and two label tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
});