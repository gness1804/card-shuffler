import React, { useState } from 'react';
import Main from './components/Main';
import { cards as defaultCards } from './data/cards';
import './reset.css';
import './App.css';

function App() {
  const [cards, setCards] = useState(defaultCards);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Shuffler</h1>
      </header>
      <Main cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
