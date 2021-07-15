import React, { Dispatch, SetStateAction } from 'react';
import { v4 } from 'uuid';
import Card from '../Card';
import { Card as CardType } from '../../models/card';
import { shuffle } from '../../utils/shuffle';

interface Props {
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>;
}

const Main = ({ cards, setCards }: Props) => {
  const shuffleCards = (): void => {
    const newCards = shuffle(cards);
    setCards([...newCards]);
  };

  return (
    <div className="main">
      <h2>Your Cards:</h2>
      {cards.slice(0, 4).map(({ suit, rank }) => (
        <Card key={v4()} suit={suit} rank={rank} />
      ))}
      <button onClick={shuffleCards}>Reshuffle</button>
    </div>
  );
};

export default Main;
