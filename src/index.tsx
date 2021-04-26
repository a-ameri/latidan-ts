import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import headerReducer from './store/reducer/header'
import modalReducer from './store/reducer/modal'
import sidebarReducer from './store/reducer/sidebar'
import recentReducer from './store/reducer/recent'

const rootReducer = combineReducers({
  header : headerReducer,
  modal : modalReducer,
  sidebar: sidebarReducer,
  recent : recentReducer


});

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
