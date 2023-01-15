import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-word',
  templateUrl: './hangman-word.component.html',
  styleUrls: ['./hangman-word.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanWordComponent {
  @Input() currentWord!: string;
  @Input() lettersToEncrypt!: string[];
}
