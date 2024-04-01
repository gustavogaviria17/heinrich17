import React, { ReactElement } from 'react';

import { IProps } from './interfaces';
import { Avatar, Name, Wrapper } from './styles';

const Profile = ({ user: { avatar, name } }: IProps): ReactElement => (
  <Wrapper>
    <Avatar alt="avatar" src={avatar} />
    <Name>{name}</Name>
  </Wrapper>
);

export default Profile;
