import React from 'react';
import { fetchPostsRequestRockets } from '../redux/reducers';
import { useDispatch } from 'react-redux';

const Rockets = () => {
  const dispatch = useDispatch();
  dispatch(fetchPostsRequestRockets);
  return (
    <div>
    <h1>Hello from the rockets page</h1>
  </div>
  )
}

export default Rockets;
