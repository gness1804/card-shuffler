import React, { Dispatch, SetStateAction } from 'react';
import { v4 } from 'uuid';
import Card from '../Card';
import { CardType } from '../../models/card';
import { shuffle } from '../../utils/shuffle';

interface Props {
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>;
}

const Main = ({ cards, setCards }: Props) => {
  const shuffleCards = (): void => {
    const newCards = shuffle(cards);
    setCards([...newCards]);
    //eslint-disable-next-line no-console
    console.info('Your other cards:', cards.slice(4));
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
