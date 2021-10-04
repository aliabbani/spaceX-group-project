import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './stylesheet/index.css';
import TravelContainer from './components/TravelContainer';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <TravelContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
