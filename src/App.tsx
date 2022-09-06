import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header titleText='Aspiration Takehome' placeholder='Search topic...' />
    </div>
  );
}

export default App;
