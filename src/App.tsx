import React from 'react';
import './App.css';

import Header from './Components/Header';
import TermsCounter from './Components/TermsCounter';
import RelatedTerms from './Components/RelatedTerms';

function App() {
  return (
    <div className="App">
      <Header titleText='Aspiration Takehome' placeholder='Search topic...' />

      <TermsCounter term='React' count={77226} />

      <RelatedTerms currentTerm='React' relatedTopics={[{ name: 'angular' }, { name: 'nextjs' }, { name: 'react-native' }]} />
    </div>
  );
}

export default App;
