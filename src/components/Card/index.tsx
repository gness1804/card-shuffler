import React from 'react';
import { Suit } from '../../models/card';
import './index.css';

interface Props {
  suit: Suit;
  rank: string;
}

const Card = ({ suit, rank }: Props) => {
  return (
    <div className="card">
      <p>{rank}</p>
      <p>{suit}</p>
    </div>
  );
};

export default Card;
