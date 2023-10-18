import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Import composeWithDevTools
import rootReducer from './reducers';
import thunk from 'redux-thunk'; // Import redux-thunk
import App from './App/App';

// Apply the Redux DevTools Extension and the Thunk middleware
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
