import {
	ChangeDetectionStrategy, Component,
	Injector,
	Input,
	OnChanges, SimpleChanges
} from '@angular/core';
import { RefreshableComponent } from 'src/app/core/model/refreshable-component.class';
import { ElapsedTime, ElapsedTimePipe } from '../../../core/pipe/elapsed-time.pipe';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';

@Component({
	selector: 'app-memo-statistics',
	templateUrl: './memo-statistics.component.html',
	styleUrls: ['./memo-statistics.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ElapsedTimePipe],
})
export class MemoStatisticsComponent extends RefreshableComponent implements OnChanges {
	@Input() statistics!: MemoGameStatistics | null;
	@Input() gameProgress!: number | null;

	gameTime: ElapsedTime = { minutes: 0, seconds: 0 };

	constructor(injector: Injector, private elapsedTimePipe: ElapsedTimePipe) {
		super(injector, 1000);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.updateGameTime();
	}

	onComponentRefresh(): void {
		this.updateGameTime();
	}

	private updateGameTime(): void {
		this.gameTime = this.elapsedTimePipe.transform(this.statistics === null ? 0 : this.statistics.startGameTime);
	}
}
