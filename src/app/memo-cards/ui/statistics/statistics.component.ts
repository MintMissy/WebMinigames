import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  @Input() statistics!: MemoGameStatistics;
}
