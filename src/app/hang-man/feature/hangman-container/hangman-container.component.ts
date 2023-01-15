import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HangmanStore } from './hangman.store';

@Component({
  selector: 'app-hangman-container',
  templateUrl: './hangman-container.component.html',
  styleUrls: ['./hangman-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HangmanStore]
})
export class HangmanContainerComponent {
  constructor(private readonly store: HangmanStore) {}
}
