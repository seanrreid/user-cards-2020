import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileCardList.css';

const ProfileCardList = props => {
  const { userData } = props;
  return (
    <ul className="ProfileCardList">
      {userData.length > 0 ? (
        userData.map(user => (
          <li className="ProfileCard" key={user.login.uuid}>
            <ProfileCard user={user} />
          </li>
        ))
      ) : (
        <p>No User Data</p>
      )}
    </ul>
  );
};

export default ProfileCardList;
