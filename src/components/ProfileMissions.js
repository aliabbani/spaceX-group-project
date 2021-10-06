import React from 'react';
import { useSelector } from 'react-redux';
// Create condition, if reserved is true, then show the title My Missions

const ProfileMissions = () => {
  const missions = useSelector((state) => state.spaceReducer.missions);
  const joined = missions.filter((mission) => mission.reserved === true);

  return (
    <div>
      <h3 className="mx-5 my-4">
        {joined.reserved > 0 ? 'My Missions' : 'No Missions joined!'}
      </h3>
      {joined.map((join) => (
        <>
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
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default ProfileMissions;
