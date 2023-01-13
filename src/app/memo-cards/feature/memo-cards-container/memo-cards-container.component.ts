import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MemoCardsStore } from './memo-cards.store';

@Component({
	selector: 'app-memo-cards-container',
	templateUrl: './memo-cards-container.component.html',
	styleUrls: ['./memo-cards-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [MemoCardsStore],
})
export class MemoCardsContainerComponent {
	cards$ = this.memoCardsStore.cards$;
	statistics$ = this.memoCardsStore.statistics$;

	constructor(private readonly memoCardsStore: MemoCardsStore) {}

  onCardFlip(cardIndex: number){
    this.memoCardsStore.flipCard(cardIndex);
  }
}
