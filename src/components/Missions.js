/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import '../stylesheet/missionInfo.css';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/reducers/dataReducers';

const Missions = (props) => {
  const dispatch = useDispatch();
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
            <td>{mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER' }</td>
            <td>
              {mission.reserved === true ? (
                <button
                  type="button"
                  onClick={() => dispatch(leaveMission(mission.mission_id))}
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => dispatch(joinMission(mission.mission_id))}
                >
                  Join Mission
                </button>
              ) }
            </td>
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
