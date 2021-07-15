import { CardType, Suit } from '../models/card';
import { CardClass } from '../models/CardClass';
import { v4 } from 'uuid';

const createData = (): CardType[] => {
  const res = [];
  const suits = [Suit.S, Suit.C, Suit.D, Suit.H];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

  for (const suit of suits) {
    for (const rank of ranks) {
      const newCard = new CardClass(v4(), suit, rank);
      res.push(newCard);
    }
  }
  return res;
};

export const cards: CardType[] = createData();
