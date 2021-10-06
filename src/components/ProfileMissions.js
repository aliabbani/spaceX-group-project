import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.spaceReducer.missions);
  const joined = missions.filter((mission) => mission.reserved === true);
  console.log(joined);
  return (
    <div>
      Hello from the mission profile
    </div>
  );
};

export default ProfileMissions;
