import React, { Dispatch, SetStateAction } from 'react';
import { v4 } from 'uuid';
import Card from '../Card';
import MiniCard from '../MiniCard';
import { CardType } from '../../models/card';
import { shuffle } from '../../utils/shuffle';
import './index.css';

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
      <h2 className="main-h2">Your Cards:</h2>
      <div className="main-cards-wrapper">
        {cards.slice(0, 4).map(({ suit, rank }) => (
          <Card key={v4()} suit={suit} rank={rank} />
        ))}
      </div>
      <button
        className="main-reshuffle-button"
        onClick={shuffleCards}
        title="Reshuffle your cards"
      >
        Reshuffle
      </button>
      <h3>Your Other Cards:</h3>
      <div className="main-mini-cards-wrapper">
        {cards.slice(4).map(({ suit, rank }) => (
          <MiniCard key={v4()} suit={suit} rank={rank} />
        ))}
      </div>
    </div>
  );
};

export default Main;
