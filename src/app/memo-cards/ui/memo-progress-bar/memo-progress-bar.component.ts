import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-memo-progress-bar',
	templateUrl: './memo-progress-bar.component.html',
	styleUrls: ['./memo-progress-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoProgressBarComponent {
	@Input() progress!: number;
}
