import React, { useState } from 'react';
import { cards as defaultCards } from '../../data/cards';
import { v4 } from 'uuid';
import Card from '../Card';

const Main = () => {
  const [cards, setCards] = useState(defaultCards);

  return (
    <div className="main">
      <h2>Your Cards:</h2>
      {cards.slice(0, 4).map(({ suit, rank }) => (
        <Card key={v4()} suit={suit} rank={rank} />
      ))}
    </div>
  );
};

export default Main;
