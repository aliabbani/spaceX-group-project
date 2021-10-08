import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';
import store from '../redux/store';

describe('Component test snapshot', () => {
  it('Router renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NavLink to="/">Rockets</NavLink>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rockets renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Missions renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Profile renders correctly', () => {
    const tree = renderer
      .create(
        <Profile />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
