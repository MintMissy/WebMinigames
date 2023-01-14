import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MemoCardsStore } from './memo-cards.store';

@Component({
	selector: 'app-memo-cards-container',
	templateUrl: './memo-cards-container.component.html',
	styleUrls: ['./memo-cards-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [MemoCardsStore],
})
export class MemoCardsContainerComponent implements OnInit {
	cards$ = this.store.cards$;
	statistics$ = this.store.statistics$;

	constructor(private readonly store: MemoCardsStore) {}

	ngOnInit(): void {
		this.store.resetGame();
	}

	onCardFlip(cardIndex: number) {
		this.store.flipCard(cardIndex);
	}

	onGameReset() {
		this.store.resetGame();
	}
}
