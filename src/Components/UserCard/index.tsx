import React from 'react';
import styled from '@emotion/styled/macro';
import { FaGithub } from 'react-icons/fa';

import { COLORS, SIZES } from '../../Utils/generalStyles';
import { GithubUser } from '../GithubUsers';

type UserCardProps = {
  user: GithubUser;
};

const Card = styled.div`
  background: ${COLORS.BLACK};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserLabel = styled.p`
  font-size: ${SIZES.LABEL_TEXT};
  color: ${COLORS.ORANGE};
  margin: 0;
  display: flex;
  gap: 0.25rem;
  text-align: center;
`;

const NameLabel = styled.p`
  font-size: ${SIZES.NAME_TEXT};
  color: ${COLORS.ORANGE};
  margin: 0;
  text-align: center;
`;

const AvatarImage = styled.img`
  width: 2.8rem;
  border-radius: 100%;
  margin-bottom: 0.5rem;
`;

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <Card>
    <AvatarImage alt={user.login} src={user.avatarUrl} />
    <UserLabel>
      <FaGithub />
      {user.login}
    </UserLabel>
    <NameLabel>{user.name}</NameLabel>
  </Card>
);

export default UserCard;
