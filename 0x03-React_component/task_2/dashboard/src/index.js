import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const isLoggedIn = true;
const listCourses = [];

ReactDOM.render(
  <React.StrictMode>
    <App isLoggedIn={true} />
    </React.StrictMode>,
  document.getElementById('root')
);