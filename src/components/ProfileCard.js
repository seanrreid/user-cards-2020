import React from 'react';
import { Card, CardImage, Image, CardContent } from 'bloomer';

const ProfileCard = props => {
  const { user } = props;
  return (
    <Card>
      <CardImage>
        <Image
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </CardImage>
      <CardContent>
        <p>
          {user.name.first} {user.name.last}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
