import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import RocketInfo from './RocketInfo';

const Rockets = (props) => {
  const { rockets } = props;
  return (
    <div className="main-rocket">
      {rockets.map((rocket) => (
        <RocketInfo rocket={rocket} key={uuidv4()} />
      ))}
    </div>
  );
};

Rockets.defaultProps = {
  rockets: [],
};
Rockets.propTypes = {
  rockets: propTypes.instanceOf(Array),
};

export default Rockets;
