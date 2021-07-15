import { CardType } from '../models/card';

const generateRandomInt = (n: number): number => Math.floor(Math.random() * n);

export const shuffle = (cards: CardType[]): CardType[] => {
  const len = cards.length;

  for (let i = 0; i < len; i++) {
    const j = generateRandomInt(len);

    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }

  return cards;
};
