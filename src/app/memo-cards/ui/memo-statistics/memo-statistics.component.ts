import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';
import { ElapsedTime, ElapsedTimePipe } from '../../pipe/elapsed-time.pipe';

@Component({
	selector: 'app-memo-statistics',
	templateUrl: './memo-statistics.component.html',
	styleUrls: ['./memo-statistics.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ElapsedTimePipe],
})
export class MemoStatisticsComponent implements OnInit, OnChanges, OnDestroy {
	@Input() statistics!: MemoGameStatistics | null;
	@Input() gameProgress!: number | null;

	private readonly interval$ = interval(1000);
	private subscription!: Subscription;
	gameTime: ElapsedTime = { minutes: 0, seconds: 0 };

	constructor(private changeDetector: ChangeDetectorRef, private elapsedTimePipe: ElapsedTimePipe) {}

	ngOnInit(): void {
		this.subscription = this.interval$.subscribe((_) => {
			this.updateGameTime();
			this.changeDetector.markForCheck();
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.updateGameTime();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	private updateGameTime(): void {
		this.gameTime = this.elapsedTimePipe.transform(this.statistics === null ? 0 : this.statistics.startGameTime);
	}
}
