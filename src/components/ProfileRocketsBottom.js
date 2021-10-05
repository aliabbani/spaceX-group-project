/* eslint camelcase: 0 */
import {
  Tab, Button, Figure,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeRocket } from '../redux/reducers/dataReducers';

const ProfileRocketsBottom = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, description, rocket_name, flickr_images,
  } = rocket;
  const imagest = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };
  return (
    <Tab.Pane eventKey={`#${id}`} className="my-3">
      {description}
      <br />
      <Figure style={imagest}>
        <Figure.Image
          width="70%"
          height="auto"
          alt="rocket_image"
          src={flickr_images[0]}
          margin="0 auto"
        />
      </Figure>
      <br />
      <Button variant="primary" size="lg" onClick={() => dispatch(removeRocket(id))}>
        Cancel
        {' '}
        {rocket_name}
      </Button>
      <hr />
    </Tab.Pane>
  );
};

ProfileRocketsBottom.defaultProps = {
  rocket: {},
  rocket_name: '',
  id: '',
  description: '',
};
ProfileRocketsBottom.propTypes = {
  rocket: propTypes.instanceOf(Object),
  rocket_name: propTypes.string,
  id: propTypes.string,
  description: propTypes.string,
};

export default ProfileRocketsBottom;
