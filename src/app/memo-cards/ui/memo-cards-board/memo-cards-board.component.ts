import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MemoCard } from '../../model/memo-card.model';

@Component({
	selector: 'app-memo-cards-board',
	templateUrl: './memo-cards-board.component.html',
	styleUrls: ['./memo-cards-board.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoCardsBoardComponent {
	@Input() memoCards!: MemoCard[] | null;

	@Output() flipCard = new EventEmitter<number>();

	trackByIndex(index: number, card: MemoCard) {
		return card.index;
	}
}
