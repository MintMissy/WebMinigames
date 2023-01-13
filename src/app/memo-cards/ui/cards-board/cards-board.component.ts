import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MemoCard } from '../../model/memo-card.model';

@Component({
	selector: 'app-cards-board',
	templateUrl: './cards-board.component.html',
	styleUrls: ['./cards-board.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsBoardComponent {
	@Input() memoCards!: MemoCard[];

	@Output() flipCard = new EventEmitter<{ cardIndex: number }>();
}
