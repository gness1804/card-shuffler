import { Suit } from './card';

export class CardClass {
  id: string;
  suit: Suit;
  rank: string;

  constructor(id: string, suit: Suit, rank: string) {
    this.id = id;
    this.suit = suit;
    this.rank = rank;
  }
}
