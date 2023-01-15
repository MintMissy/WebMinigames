import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-hangman-letters-panel',
	templateUrl: './hangman-letters-panel.component.html',
	styleUrls: ['./hangman-letters-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HangmanLettersPanelComponent {
	@Input() letters!: Map<string, boolean>;

  @Output() letterUse = new EventEmitter<string>();
}
