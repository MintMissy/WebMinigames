import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hangman-letter-button',
  templateUrl: './hangman-letter-button.component.html',
  styleUrls: ['./hangman-letter-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanLetterButtonComponent {
  @Input() used!: boolean;
  @Input() letter!: string;

  @Output() letterUse = new EventEmitter<string>();
}
