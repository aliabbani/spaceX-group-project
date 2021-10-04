import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import RocketInfo from './RocketInfo';
import { fetchPostsRequestRockets } from '../redux/reducers';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.spacereducer.rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <RocketInfo rocket={rocket} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Rockets;
