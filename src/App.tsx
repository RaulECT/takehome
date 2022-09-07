import { useRef } from 'react';
import './App.css';

import Header from './Components/Header';
import TermsCounter from './Components/TermsCounter';
import RelatedTerms from './Components/RelatedTerms';
import GithubUsers from './Components/GithubUsers';

import useTopics from './hooks/getTopics';

function App() {
  const { data, refetch } = useTopics({ initialTopic: process.env.REACT_APP_INITIAL_SEARCH_VALUE || '' });
  const refetchSearchRef = useRef<NodeJS.Timeout | string>('');

  const onSelectTopic = (topicSelected: string) => {
    refetch({ name: topicSelected });
  }

  const onSearch = (searchValue: string) => {
    clearTimeout(refetchSearchRef.current);

    refetchSearchRef.current = setTimeout(() => refetch({ name: searchValue}), 1000);
  }

  return (
    <div className="App">
      <Header
        titleText='Aspiration Takehome'
        placeholder='Search topic...'
        onSearch={onSearch}
      />

      <TermsCounter
        term={data?.topic.name}
        count={data?.topic.stargazerCount}
      />

      <RelatedTerms
        currentTerm={data?.topic.name}
        relatedTopics={data?.topic.relatedTopics}
        onSelectTopic={onSelectTopic}
      />

      <GithubUsers currentTerm={data?.topic.name} users={data?.topic.stargazers.nodes} />
    </div>
  );
}

export default App;
