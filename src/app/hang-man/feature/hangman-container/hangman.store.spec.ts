import { HangmanStore } from './hangman.store';

describe('HangmanStore', () => {
  const componentStore = new HangmanStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
