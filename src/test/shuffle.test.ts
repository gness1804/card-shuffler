/* eslint-disable @typescript-eslint/no-var-requires */
import { shuffle } from '../utils/shuffle';
import { cards } from '../data/cards';

describe('shuffle', () => {
  it('should return a string of the same length as the input string', () => {
    const res = shuffle(cards);
    expect(res.length).toEqual(cards.length);

    /*eslint-disable-next-line no-console */
    console.info('Your shuffled cards:');

    for (const card of res) {
      /*eslint-disable-next-line no-console */
      console.info({ suit: card.suit, rank: card.rank });
    }
  });

  it('should return a result containing no duplicates', () => {
    const res = shuffle(cards);
    const set = new Set(res);

    expect(set.size).toEqual(res.length);
  });
});
