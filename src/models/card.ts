export enum Suit {
  S = 'Spades',
  C = 'Clubs',
  D = 'Diamonds',
  H = 'Hearts',
}

export interface CardType {
  id: string;
  suit: Suit;
  rank: string;
}
