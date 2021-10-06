import React from 'react';
import { useSelector } from 'react-redux';
// Create condition, if reserved is true, then show the title

const ProfileMissions = () => {
  const missions = useSelector((state) => state.spaceReducer.missions);
  const joined = missions.filter((mission) => mission.reserved === true);
  console.log(joined);

  return (
    <div>
      <h1>Hello from the mission profile</h1>
      {joined.map((join) => (
        <div key={join.mission_id}>
          {join.reserved === true ? (
            <h2>
              {join.mission_name}
              {' '}
            </h2>
          ) : (
            <h2>
              {null}
              {' '}
            </h2>
          ) }
        </div>
      ))}
    </div>
  );
};

export default ProfileMissions;
