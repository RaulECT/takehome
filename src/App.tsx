import React from 'react';
import './App.css';

import Header from './Components/Header';
import TermsCounter from './Components/TermsCounter';
import RelatedTerms from './Components/RelatedTerms';
import GithubUsers from './Components/GithubUsers';

import useTopics from './hooks/getTopics';

function App() {
  const { data, refetch } = useTopics({ initialTopic: 'react' });
  console.log('[data]', data, process.env);

  const onSelectTopic = (topicSelected: string) => {
    refetch({ name: topicSelected });
  }

  return (
    <div className="App">
      <Header titleText='Aspiration Takehome' placeholder='Search topic...' />

      <TermsCounter term={data?.topic.name} count={data?.topic.stargazerCount} />

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
