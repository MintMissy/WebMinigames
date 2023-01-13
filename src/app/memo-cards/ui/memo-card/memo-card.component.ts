import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MemoCard } from '../../model/memo-card.model';

@Component({
	selector: 'app-memo-card',
	templateUrl: './memo-card.component.html',
	styleUrls: ['./memo-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoCardComponent {
	@Input() memoCard!: MemoCard;

	@Output() flipCard = new EventEmitter<number>();
}
