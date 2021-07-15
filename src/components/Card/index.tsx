import React from 'react';
import { Suit } from '../../models/card';
import clubs from '../../assets/clubs.svg';
import spades from '../../assets/spades.svg';
import diamonds from '../../assets/diamonds.svg';
import heart from '../../assets/heart.svg';
import './index.css';

interface Props {
  suit: Suit;
  rank: string;
}

const suitMapper = {
  [Suit.S]: spades,
  [Suit.C]: clubs,
  [Suit.D]: diamonds,
  [Suit.H]: heart,
};

const Card = ({ suit, rank }: Props) => {
  return (
    <div className="card">
      <p>{rank}</p>
      <img src={suitMapper[suit]} alt="logo" />
    </div>
  );
};

export default Card;
