import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HangmanGameStatistics } from '../../model/hangman-game-statistics.model';

@Component({
  selector: 'app-hangman-sidebar',
  templateUrl: './hangman-sidebar.component.html',
  styleUrls: ['./hangman-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanSidebarComponent {
	@Input() statistics!: HangmanGameStatistics | null;

  @Output() gameReset = new EventEmitter<void>();
}
