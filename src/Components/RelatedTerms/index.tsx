import React from 'react';
import styled from '@emotion/styled/macro';

import Chip from '../Chip';
import { Label } from '../Label';

export type RelatedTopicsType = {
  name: string;
};

type RelatedTermsProps = {
  currentTerm: string | undefined;
  relatedTopics: RelatedTopicsType[] | undefined;
  onSelectTopic: (topic: string) => void;
};

const Container = styled.section``;

const ChipsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const RelatedTerms: React.FC<RelatedTermsProps> = ({ currentTerm, relatedTopics, onSelectTopic }) => (
  <Container>
    <Label>Some topics related with “{currentTerm}” are:</Label>

    <ChipsContainer>
      {relatedTopics ? relatedTopics.map((topic, index) => <Chip key={index} value={topic.name} onClick={onSelectTopic} />) : <Label>No related topics found</Label>}
    </ChipsContainer>
  </Container>
);

export default RelatedTerms;
