import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('<Test App.js />', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  it('should contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('should contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />));
  });

  it('div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />));
  });

  it('div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className='App-footer' />));
  });

  it('CourseList component is not included', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('when isLoggedIn is true, Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('when isLoggedIn is true, CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });
});
