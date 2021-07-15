import { CardType } from '../models/card';

const generateRandomInt = (n: number): number => Math.floor(Math.random() * n);

export const shuffle = (cards: CardType[]): CardType[] => {
  const len = cards.length;

  for (let i = 0; i < len; i++) {
    let curr = cards[i];
    const newPos = generateRandomInt(len);

    const temp = curr;
    curr = cards[newPos];
    cards[newPos] = temp;
  }

  return cards;
};
