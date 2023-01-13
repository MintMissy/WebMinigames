import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { cardSymbols } from '../../constants/memo-cards.constants';
import { MemoCard } from '../../model/memo-card.model';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';

export interface MemoCardsState {
	statistics: MemoGameStatistics;
	cards: MemoCard[];
}

const initialState: MemoCardsState = {
	statistics: {
		startGameTime: new Date(),
		moves: 0,
		progress: 0,
	},
	cards: [],
};

@Injectable()
export class MemoCardsStore extends ComponentStore<MemoCardsState> {
	constructor() {
		super(initialState);
	}

	readonly statistics$ = this.select((state) => state.statistics);
	readonly cards$ = this.select((state) => state.cards);

	flipCard(cardIndex: number) {
		this.setState((state) => ({
			...state,
			cards: state.cards.map((card) => {
				if (card.index === cardIndex) {
					return {
						...card,
						flipped: !card.flipped,
					};
				}
				return card;
			}),
		}));
	}

	restartGame() {
		this.setState((state) => {
			return {
				...state,
				statistics: {
					startGameTime: new Date(),
					moves: 0,
					progress: 0,
				},
				cards: this.generateNewDeck(),
			};
		});
	}

	private generateNewDeck(): MemoCard[] {
		const symbols = [];
		const length = cardSymbols.length;
		
		for (let i = 0; i < length; i++) {
			symbols.push({ index: i, symbol: cardSymbols[i], flipped: false });
			symbols.push({ index: i + length, symbol: cardSymbols[i], flipped: false });
		}
		// Shuffle cards
		symbols.sort(() => Math.random() - 0.5);

		return symbols;
	}
}
