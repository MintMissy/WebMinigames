import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
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
}
