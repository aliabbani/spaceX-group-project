import React from 'react';
import ProfileRocketsContainer from './ProfileRocketsContainer';
import ProfileMissions from './ProfileMissions';
import '../stylesheet/profile.css';

const Profile = () => (
  <div className="profile-container">
    <ProfileRocketsContainer />
    <ProfileMissions />
  </div>
);

export default Profile;
