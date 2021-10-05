/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import '../stylesheet/missionInfo.css';

const Missions = (props) => {
  const {
    missions,
  } = props;

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th className="mission-row">Mission</th>
          <th className="description-row">Description</th>
          <th className="mission-row">Status</th>
          <th className="mission-row">{' '}</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <th scope="row">{mission.mission_name}</th>
            <td>{mission.description}</td>
            <td>Status</td>
            <td>{' '}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Missions.propTypes = {
  missions: PropTypes.instanceOf(Array).isRequired,
};

export default Missions;
