import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import RocketInfo from './RocketInfo';

const Rockets = (props) => {
  const { rockets } = props;
  const { rocketsTemp } = rockets;
  return (
    <div>
      {rocketsTemp.map((rocket) => (
        <RocketInfo rocket={rocket} key={uuidv4()} />
      ))}
    </div>
  );
};

Rockets.defaultProps = {
  rockets: {},
  rocketsTemp: {},
};
Rockets.propTypes = {
  rockets: propTypes.instanceOf(Object),
  rocketsTemp: propTypes.instanceOf(Object),
};

export default Rockets;
