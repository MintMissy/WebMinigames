import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HangmanStore } from './hangman.store';

@Component({
	selector: 'app-hangman-container',
	templateUrl: './hangman-container.component.html',
	styleUrls: ['./hangman-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [HangmanStore],
})
export class HangmanContainerComponent implements OnInit {
	currentWord$ = this.store.currentWord$;
	lettersToEncrypt$ = this.store.lettersToEncrypt$;
	usedLetters$ = this.store.usedLetters$;

	constructor(private readonly store: HangmanStore) {}

	ngOnInit(): void {
		this.store.addNewWordsToCache()
		this.store.restartGame();
	}

	onLetterUse(letter: string) {
		this.store.guessLetter(letter);
	}
}
