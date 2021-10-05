/* eslint camelcase: 0 */
import { ListGroup } from 'react-bootstrap';
import propTypes from 'prop-types';

const ProfileRocketsTop = (props) => {
  const { rocket } = props;
  const { id, rocket_name } = rocket;
  return (
    <ListGroup.Item action href={`#${id}`}>
      {rocket_name}
    </ListGroup.Item>
  );
};

ProfileRocketsTop.defaultProps = {
  rocket: {},
  rocket_name: '',
  id: '',
};
ProfileRocketsTop.propTypes = {
  rocket: propTypes.instanceOf(Object),
  rocket_name: propTypes.string,
  id: propTypes.string,
};

export default ProfileRocketsTop;
