import React from 'react';
import styled from '@emotion/styled/macro';

import Chip from '../Chip';
import { Label } from '../Label';

type RelatedTopicsType = {
  name: string;
};

type RelatedTermsProps = {
  currentTerm: string;
  relatedTopics: RelatedTopicsType[];
};

const Container = styled.section``;

const ChipsContainer = styled.section`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const RelatedTerms: React.FC<RelatedTermsProps> = ({ currentTerm, relatedTopics }) => (
  <Container>
    <Label>Some topics related with “{currentTerm}” are:</Label>

    <ChipsContainer>
      {relatedTopics.map((topic, index) => <Chip key={index} value={topic.name} />)}
    </ChipsContainer>
  </Container>
);

export default RelatedTerms;
