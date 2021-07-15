import React from 'react';
import { Suit } from '../../models/card';

interface Props {
  suit: Suit;
  rank: string;
}

const Card = ({ suit, rank }: Props) => {
  return (
    <div>
      <p>{rank}</p>
      <p>{suit}</p>
    </div>
  );
};

export default Card;
