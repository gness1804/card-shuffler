import { cards } from '../data/cards';

describe('cards', () => {
  it('should return 52 cards', () => {
    expect(cards.length).toBe(52);
  });

  it('cards should not contain duplicates', () => {
    const set = new Set(cards);
    expect(set.size).toEqual(cards.length);
  });
});
