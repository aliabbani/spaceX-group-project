/* eslint camelcase: 0 */
import React from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addRocket, removeRocket } from '../redux/reducers/dataReducers';

const RocketInfo = (props) => {
  const { rocket } = props;
  const {
    rocket_name, description, flickr_images, id,
  } = rocket;
  const imgstyle = {
    width: '100%',
    height: '350px',
  };
  const dispatch = useDispatch();
  const res = useSelector((state) => state.spaceReducer.rockets);
  const reserved = res.map((elem) => elem.reserved === true);
  return (
    <div>
      <div className="card mb-5 mx-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={flickr_images[0]}
              className="img-fluid rounded-start"
              alt="rocket_image"
              style={imgstyle}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title p0">{rocket_name}</h2>
              <h5 className="card-text">{description}</h5>
              {reserved[(id - 1)] ? (
                <button
                  type="button"
                  className="btn btn-secondary my-4"
                  onClick={() => dispatch(removeRocket(rocket.id))}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary my-4"
                  onClick={() => {
                    dispatch(addRocket(rocket.id));
                  }}
                >
                  Reserve
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
RocketInfo.defaultProps = {
  rocket: {},
  rocket_name: '',
  description: '',
  flickr_images: [],
};
RocketInfo.propTypes = {
  rocket: propTypes.instanceOf(Object),
  rocket_name: propTypes.string,
  description: propTypes.string,
  flickr_images: propTypes.instanceOf(Array),
};

export default RocketInfo;
