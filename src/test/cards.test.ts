import { cards } from '../data/cards';

describe('cards', () => {
  it('should return 48 cards', () => {
    expect(cards.length).toBe(48);
  });

  it('cards should not contain duplicates', () => {
    const set = new Set(cards);
    expect(set.size).toEqual(cards.length);
  });
});
