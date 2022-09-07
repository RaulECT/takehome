import { useQuery } from '@apollo/client';

import { TOPICS } from '../graphql/topics';
import { RelatedTopicsType } from '../Components/RelatedTerms';
import { GithubUser } from '../Components/GithubUsers';

type UseTopicsProps = {
  initialTopic: string;
}

type TopicsQueryResponse = {
  topic: {
    name: string | undefined;
    stargazerCount: number;
    viewerHasStarred: boolean;
    relatedTopics: RelatedTopicsType[];
    stargazers: {
      totalCount: number;
      nodes: GithubUser[]
    }
  }
}

const useTopics = ({ initialTopic }: UseTopicsProps) => {
  const { data, refetch } = useQuery<TopicsQueryResponse>(TOPICS, { variables: { name: initialTopic } });

  return { data, refetch };
};

export default useTopics;

