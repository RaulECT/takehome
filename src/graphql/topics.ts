import { gql } from '@apollo/client';

export const TOPICS = gql`
  query topic($name: String!) {
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
  }
`;