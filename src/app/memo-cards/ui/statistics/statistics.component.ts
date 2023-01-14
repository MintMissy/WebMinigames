import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';
import { ElapsedTime, ElapsedTimePipe } from '../../pipe/elapsed-time.pipe';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ElapsedTimePipe],
})
export class StatisticsComponent implements OnInit, OnDestroy {
	@Input() statistics!: MemoGameStatistics | null;
	@Input() gameProgress!: number | null;

	private readonly interval$ = interval(1000);
	private subscription!: Subscription;
	gameTime: ElapsedTime = { minutes: 0, seconds: 0 };

	constructor(private changeDetector: ChangeDetectorRef, private elapsedTimePipe: ElapsedTimePipe) {}

	ngOnInit(): void {
		this.subscription = this.interval$.subscribe((_) => {
			this.gameTime = this.elapsedTimePipe.transform(this.statistics === null ? 0 : this.statistics.startGameTime);
			this.changeDetector.markForCheck();
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
