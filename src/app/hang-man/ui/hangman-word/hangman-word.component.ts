import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameState } from 'src/app/core/model/game-state.model';

@Component({
  selector: 'app-hangman-word',
  templateUrl: './hangman-word.component.html',
  styleUrls: ['./hangman-word.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanWordComponent {
  @Input() currentWord!: string;
  @Input() lettersToEncrypt!: string[];
	@Input() gameState!: GameState;
}
