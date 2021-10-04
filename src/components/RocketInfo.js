/* eslint camelcase: 0 */
import React from 'react';
import propTypes from 'prop-types';

const RocketInfo = (props) => {
  const { rocket } = props;
  const { rocketName, description, flickr_images } = rocket;
  const imgstyle = {
    width: '100%',
    height: '350px',
  };
  return (
    <div>
      <div className="card mb-5 mx-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={flickr_images[0]} className="img-fluid rounded-start" alt="rocket_image" style={imgstyle} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title p0">{rocketName}</h2>
              <h5 className="card-text">{description}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
RocketInfo.defaultProps = {
  rocket: {},
  rocketName: '',
  description: '',
  flickr_images: [],
};
RocketInfo.propTypes = {
  rocket: propTypes.instanceOf(Object),
  rocketName: propTypes.string,
  description: propTypes.string,
  flickr_images: propTypes.instanceOf(Array),
};

export default RocketInfo;
