import React, { useState } from 'react';
import './App.css';
import HolbertonLogo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy, getLatestNotification } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgetn', html: getLatestNotification() },
  ];

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    return (
      <React.Fragment>
        <Notifications displayDrawer={true} />
        <div className="App">
          <Header />
          <BodySectionWithMarginBottom title="Course list">
            {this.props.isLoggedIn ? (
            <CourseList listCourses={this.listCourses} />
          ) : (
            <Login />
          )}
          </BodySectionWithMarginBottom>
          <BodySectionWithMarginBottom title="Log in to continue">
            {this.props.isLoggedIn ? null : <Login />}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
