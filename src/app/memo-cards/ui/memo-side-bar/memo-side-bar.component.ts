import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MemoGameStatistics } from '../../model/memo-game-statistics.model';

@Component({
  selector: 'app-memo-side-bar',
  templateUrl: './memo-side-bar.component.html',
  styleUrls: ['./memo-side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoSideBarComponent {
  @Input() statistics!: MemoGameStatistics | null;
  @Input() gameStartTime!: number | null;
  @Input() gameProgress!: number | null;

  @Output() gameReset = new EventEmitter<void>();
}
