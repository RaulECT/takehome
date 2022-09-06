import React from 'react';
import './App.css';

import Header from './Components/Header';
import TermsCounter from './Components/TermsCounter';
import RelatedTerms from './Components/RelatedTerms';
import GithubUsers from './Components/GithubUsers';

import useTopics from './hooks/getTopics';

function App() {
  const {data} = useTopics({ initialTopic: 'react' });
  console.log('[data]', data, process.env);

  return (
    <div className="App">
      <Header titleText='Aspiration Takehome' placeholder='Search topic...' />

      <TermsCounter term={data?.topic.name} count={data?.topic.stargazerCount} />

      <RelatedTerms currentTerm={data?.topic.name} relatedTopics={data?.topic.relatedTopics} />

      <GithubUsers currentTerm='React' users={data?.topic.stargazers.nodes} />
    </div>
  );
}

export default App;
