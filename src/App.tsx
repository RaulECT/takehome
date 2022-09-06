import React from 'react';
import './App.css';

import Header from './Components/Header';
import TermsCounter from './Components/TermsCounter';
import RelatedTerms from './Components/RelatedTerms';
import GithubUsers from './Components/GithubUsers';

function App() {
  return (
    <div className="App">
      <Header titleText='Aspiration Takehome' placeholder='Search topic...' />

      <TermsCounter term='React' count={77226} />

      <RelatedTerms currentTerm='React' relatedTopics={[{ name: 'angular' }, { name: 'nextjs' }, { name: 'react-native' }]} />

      <GithubUsers currentTerm='React' users={[{
        "avatarUrl": "https://avatars.githubusercontent.com/u/45117845?v=4",
        "name": "Nathaniel Smith",
        "login": "jnathaniels"
      }, {
        "avatarUrl": "https://avatars.githubusercontent.com/u/45118433?u=05d625da10e80779ab7733cbe58988bc7ce7353a&v=4",
        "name": "Vittal Kumar",
        "login": "vittal-kumar"
      }, {
        "avatarUrl": "https://avatars.githubusercontent.com/u/45134409?u=dba2daabcacaa7df486ceb7ace80dc1ed6cf242c&v=4",
        "name": "Radosław Grabowski",
        "login": "Radzieoon"
      }]} />
    </div>
  );
}

export default App;
