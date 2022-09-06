import React from 'react';
import './App.css';

import Header from './Components/Header';
import TermsCounter from './Components/TermsCounter';

function App() {
  return (
    <div className="App">
      <Header titleText='Aspiration Takehome' placeholder='Search topic...' />

      <TermsCounter term='React' count={77226} />
    </div>
  );
}

export default App;
