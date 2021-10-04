import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import BookContainer from './components/BookContainer';
// import store from './redux/configureStore';
import './stylesheet/index.css';
import TravelContainer from './components/TravelContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TravelContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
