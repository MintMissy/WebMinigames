import { ChangeDetectionStrategy, Component, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RefreshableComponent } from 'src/app/core/model/refreshable-component.class';
import { ElapsedTime, ElapsedTimePipe } from 'src/app/core/pipe/elapsed-time.pipe';
import { HangmanGameStatistics } from '../../model/hangman-game-statistics.model';

@Component({
	selector: 'app-hangman-statistics',
	templateUrl: './hangman-statistics.component.html',
	styleUrls: ['./hangman-statistics.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ElapsedTimePipe],
})
export class HangmanStatisticsComponent extends RefreshableComponent implements OnChanges {
	@Input() statistics!: HangmanGameStatistics | null;
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
