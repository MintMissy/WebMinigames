import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-gallow',
  templateUrl: './hangman-gallow.component.html',
  styleUrls: ['./hangman-gallow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanGallowComponent {
  @Input() leftGuesses!: number;
}
