import React from 'react';
import styled from '@emotion/styled/macro';

import { Label } from '../Label';
import UserCard from '../UserCard';

export type GithubUser = {
  avatarUrl: string;
  name: string;
  login: string;
};

type GithubUsersProps = {
  currentTerm: string;
  users: GithubUser[];
};

const Container = styled.section`
  margin-top: 4rem;
`;

const UsersContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const GithubUsers: React.FC<GithubUsersProps> = ({ currentTerm, users }) => (
  <Container>
    <Label>Some who starred {currentTerm} are:</Label>
    <UsersContainer>
      {users.map((user, index) => <UserCard key={`user_${index}`} user={user} />)}
    </UsersContainer>
  </Container>
);

export default GithubUsers;
