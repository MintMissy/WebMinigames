import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RandomWordService } from '../../service/random-word.service';
import { HangmanStore } from './hangman.store';

@Component({
	selector: 'app-hangman-container',
	templateUrl: './hangman-container.component.html',
	styleUrls: ['./hangman-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [HangmanStore],
})
export class HangmanContainerComponent implements OnInit {
	statistics$ = this.store.statistics$;
	currentWord$ = this.store.currentWord$;
	lettersToEncrypt$ = this.store.lettersToEncrypt$;
	usedLetters$ = this.store.usedLetters$;
	wordsCache$ = this.store.wordsCache$;
	leftGuesses$ = this.store.leftGuesses$;
	gameState$ = this.store.gameState$;

	private hasInitializedFirstRun = false;

	constructor(private readonly store: HangmanStore, private randomWordService: RandomWordService) {}

	ngOnInit(): void {
		this.wordsCache$.subscribe((words) => {
			if (words.length <= 5) {
				this.addWordsToCache();
			}
		});
	}

	onLetterUse(letter: string) {
		this.store.guessLetter(letter);
	}

	onGameReset() {
		this.store.restartGame();
	}

	addWordsToCache() {
		this.randomWordService.getRandomWords().subscribe((words) => {
			this.store.addNewWordsToCache(words);
			if (!this.hasInitializedFirstRun) {
				this.store.restartGame();
			}
		});
	}
}
