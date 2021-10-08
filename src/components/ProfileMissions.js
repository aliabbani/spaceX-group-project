import React from 'react';
import {
  Tab, ListGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.spaceReducer.missions);
  const joined = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="mission-container">
      <h3>
        {joined.length > 0 ? 'My Missions' : 'No Missions joined!'}
      </h3>
      {joined.map((join) => (
        <Tab.Container key={join.mission_id}>

          <ListGroup>
            {join.reserved === true ? (
              <ListGroup.Item className="box">
                {join.mission_name}
                {' '}
              </ListGroup.Item>
            ) : (
              <h2>
                {null}
                {' '}
              </h2>
            )}
          </ListGroup>

        </Tab.Container>
      ))}
    </div>
  );
};

export default ProfileMissions;
