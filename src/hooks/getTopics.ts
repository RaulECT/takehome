import { useQuery, gql } from '@apollo/client';

import { RelatedTopicsType } from '../Components/RelatedTerms';
import { GithubUser } from '../Components/GithubUsers';

type UseTopicsProps = {
  initialTopic: string;
}

type TopicsQueryResponse = {
  topic: {
    name: string;
    stargazerCount: number;
    viewerHasStarred: boolean;
    relatedTopics: RelatedTopicsType[];
    stargazers: {
      totalCount: number;
      nodes: GithubUser[]
    }
  }
}

const TOPICS = gql`query topic($name: String!) {
  topic(name: $name) {
    name
    stargazerCount
    viewerHasStarred
    relatedTopics {
      name
    }
    stargazers(first: 3) {
      totalCount
      nodes {
        avatarUrl
        name
        login
      }
    }
  }
}`;

const useTopics = ({ initialTopic }: UseTopicsProps) => {
  const { data } = useQuery<TopicsQueryResponse>(TOPICS, { variables: { name: initialTopic } });

  return { data };
};

export default useTopics;

