import React from 'react';
import styled from '@emotion/styled/macro';

import { Label } from '../Label';
import { COLORS, SIZES } from '../../Utils/generalStyles';

type TermCounterProps = {
  term: string | undefined;
  count: number | undefined;
};

const Container = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const CounterLabel = styled.p`
  margin: 0;
  color: ${COLORS.ORANGE};
  font-size: ${SIZES.COUNTER_TEXT};
  font-weight: bold;
`;

const TermsCounter: React.FC<TermCounterProps> = ({ term, count }) => (
  <Container>
    <Label>{term} has:</Label>
    <CounterLabel>{count || 0}</CounterLabel>
    <Label>stargazers</Label>
  </Container>
);

export default TermsCounter;
