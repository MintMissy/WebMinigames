import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GameState } from 'src/app/core/model/game-state.model';
import { HangmanGameStatistics } from '../../model/hangman-game-statistics.model';

export interface HangmanState {
	usedLetters: Map<string, boolean>;
	currentWord: string;
	wordsCache: string[];
	gameState: GameState;
	incorrectGuesses: number;
	statistics: HangmanGameStatistics;
}

const initialState: HangmanState = {
	usedLetters: new Map<string, boolean>(),
	currentWord: '',
	wordsCache: [],
	gameState: 'IN_PROGRESS',
	incorrectGuesses: 0,
	statistics: {
		startGameTime: Date.now(),
		progress: 0,
	},
};

@Injectable()
export class HangmanStore extends ComponentStore<HangmanState> {
	constructor() {
		super(initialState);
	}

	readonly usedLetters$ = this.select((state) => state.usedLetters);
	readonly currentWord$ = this.select((state) => state.currentWord);
	readonly gameState$ = this.select((state) => state.gameState);
	readonly incorrectGuesses$ = this.select((state) => state.incorrectGuesses);
	readonly statistics$ = this.select((state) => state.statistics);
	readonly wordsCache$ = this.select((state) => state.wordsCache);
	readonly leftGuesses$ = this.select((state) => this.getLeftGuesses(state));

	readonly lettersToEncrypt$ = this.select((state) => {
		const lettersToEncrypt = [];
		const lettersInWord = [...new Set(state.currentWord.split(''))];

		for (const letter of lettersInWord) {
			if (!state.usedLetters.get(letter)) {
				lettersToEncrypt.push(letter);
			}
		}

		return lettersToEncrypt;
	});

	guessLetter(letter: string) {
		this.setState((state) => {
			if (state.gameState === 'FINISHED') return { ...state };

			const guessedLetters = new Map(state.usedLetters);
			guessedLetters.set(letter, true);

			const progress = this.getWordRevealProgress(state.currentWord, guessedLetters);
			const successfulGuess = progress === 100;

			if (this.getLeftGuesses({ ...state, usedLetters: guessedLetters }) === 0) {
				return {
					...state,
					incorrectGuesses: 0,
					usedLetters: guessedLetters,
					gameState: 'FINISHED',
					statistics: {
						...state.statistics,
						progress: progress,
					},
				};
			}

			return {
				...state,
				incorrectGuesses: successfulGuess ? state.incorrectGuesses : state.incorrectGuesses + 1,
				usedLetters: guessedLetters,
				gameState: successfulGuess ? 'FINISHED' : state.gameState,
				statistics: {
					...state.statistics,
					progress: progress,
				},
			};
		});
	}

	guessWord(word: string) {
		this.setState((state) => {
			if (state.gameState === 'FINISHED') return { ...state };

			const successfulGuess = word === state.currentWord;
			return {
				...state,
				incorrectGuesses: successfulGuess ? state.incorrectGuesses : state.incorrectGuesses + 1,
				gameState: successfulGuess ? 'FINISHED' : state.gameState,
				statistics: {
					...state.statistics,
					progress: successfulGuess ? 100 : state.statistics.progress,
				},
			};
		});
	}

	restartGame() {
		this.setState((state) => ({
			...state,
			usedLetters: this.getLetters(),
			currentWord: state.wordsCache[0] || 'error',
			wordsCache: state.wordsCache.slice(1),
			gameState: 'IN_PROGRESS',
			statistics: {
				...state.statistics,
				startGameTime: Date.now(),
				progress: 0,
			},
		}));
	}

	private getWordRevealProgress(currentWord: string, usedLetters: Map<string, boolean>): number {
		const lettersInCurrentWord = [...new Set(currentWord.split(''))];
		let guessedLettersCount = 0;

		for (const letter of lettersInCurrentWord) {
			if (usedLetters.get(letter)) {
				guessedLettersCount++;
			}
		}

		return (guessedLettersCount / lettersInCurrentWord.length) * 100;
	}

	addNewWordsToCache(words: string[]) {
		this.setState((state) => {
			return { ...state, wordsCache: [...state.wordsCache, ...words] };
		});
	}

	private getLeftGuesses(state: HangmanState): number {
		const usedLetters: string[] = [];
		state.usedLetters.forEach((value, key) => {
			if (value) {
				usedLetters.push(key);
			}
		});
		return 11 - usedLetters.length;
	}

	private getLetters() {
		const letters: [string, boolean][] = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => [letter, false]);
		return new Map(letters);
	}
}
