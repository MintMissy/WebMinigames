import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hangman-game-board',
  templateUrl: './hangman-game-board.component.html',
  styleUrls: ['./hangman-game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanGameBoardComponent {
  @Input() currentWord!: string;
  @Input() lettersToEncrypt!: string[];
  @Input() usedLetters!: Map<string, boolean> | Record<string, boolean>;

  @Output() letterUse = new EventEmitter<string>();
}
