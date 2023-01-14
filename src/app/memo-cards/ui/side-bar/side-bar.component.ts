import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  @Input() statistics!: MemoGameStatistics | null;
  @Input() gameStartTime!: number | null;
  @Input() gameProgress!: number | null;
}
