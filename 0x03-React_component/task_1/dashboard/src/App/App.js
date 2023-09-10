import React, { useState } from 'react';
import './App.css';
import HolbertonLogo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

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
          {this.props.isLoggedIn ? (
          <CourseList listCourses={this.listCourses} />
          ) : (
            <Login />
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
