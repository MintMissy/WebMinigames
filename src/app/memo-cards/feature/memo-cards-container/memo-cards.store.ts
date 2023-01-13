import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { cardSymbols } from '../../constants/memo-cards.constants';
import { MemoCard } from '../../model/memo-card.model';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';

export interface MemoCardsState {
	statistics: MemoGameStatistics;
	cards: MemoCard[];
	lastFlipTime: number;
	flippingAnimationDuration: number;
}

const initialState: MemoCardsState = {
	statistics: {
		startGameTime: Date.now(),
		moves: 0,
		progress: 0,
	},
	cards: [],
	lastFlipTime: 0,
	flippingAnimationDuration: 1000,
};

@Injectable()
export class MemoCardsStore extends ComponentStore<MemoCardsState> {
	constructor() {
		super(initialState);
	}

	readonly statistics$ = this.select((state) => state.statistics);
	readonly cards$ = this.select((state) => state.cards);

	flipCard(cardIndex: number) {
		this.setState((state) => {
			// Clone state and set the card to flipped
			let cards = [...state.cards].map((card) => (card.index === cardIndex ? { ...card, flipped: true } : card));

			const clonedState = { ...state, lastFlipTime: Date.now() };
			const flippedCards = this.getFlippedCards(cards);

			// Cancel flip if player is during flipping animation
			if (flippedCards > 2 && this.isPlayingFlippingAnimation()) {
				return { ...state };
			}

			if (flippedCards === 2) {
				const cardSymbols = [...cards].filter((card) => card.flipped === true).map((card) => card.symbol);

				if (cardSymbols[0] === cardSymbols[1]) {
					// Mark cards as completed -> player found a pair
					setTimeout(() => {
						this.applyFlip({
							...clonedState,
							cards: [...cards].map((card) => ({ ...card, completed: card.flipped ? true : card.completed, flipped: false })),
						});
					}, state.flippingAnimationDuration);
				} else {
					// Unflip all cards -> cards were different
					setTimeout(() => {
						this.applyFlip({ ...clonedState, cards: [...cards].map((card) => ({ ...card, flipped: false })) });
					}, state.flippingAnimationDuration);
				}

				return { ...clonedState, cards: cards };
			}

			return {
				...clonedState,
				cards: cards,
			};
		});
	}

	private applyFlip(state: MemoCardsState) {
		this.setState((_) => state);
	}

	restartGame() {
		this.setState((state) => {
			return {
				...state,
				statistics: {
					startGameTime: Date.now(),
					moves: 0,
					progress: 0,
				},
				cards: this.generateNewDeck(),
				lastFlipTime: 0,
			};
		});
	}

	private isPlayingFlippingAnimation() {
		const animationDuration = this.get((state) => state.flippingAnimationDuration);
		const lastFlipTime = this.get((state) => state.lastFlipTime);

		return Date.now() - lastFlipTime <= animationDuration;
	}

	private getFlippedCards(cards: MemoCard[]): number {
		return cards.reduce((previous, current) => previous + (current.flipped ? 1 : 0), 0);
	}

	private generateNewDeck(): MemoCard[] {
		const symbols = [];
		const length = cardSymbols.length;

		for (let i = 0; i < length; i++) {
			symbols.push({ index: i, symbol: cardSymbols[i], flipped: false, completed: false });
			symbols.push({ index: i + length, symbol: cardSymbols[i], flipped: false, completed: false });
		}
		// Shuffle cards
		symbols.sort(() => Math.random() - 0.5);

		return symbols;
	}
}
