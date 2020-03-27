import React from 'react';
import { Section, Columns, Column } from 'bloomer';
import ProfileCard from './ProfileCard';


const ProfileCardList = props => {
  const { userData } = props;
    return (
      <Section>
        <Columns>
            {userData.length > 0 ? (
              userData.map(user => (
                <Column className="ProfileCard" key={user.login.uuid}>
                  <ProfileCard user={user} />
                </Column>
              ))
            ) : (
              <li>No User Data</li>
            )}
        </Columns>
      </Section>
    );
};

export default ProfileCardList;
