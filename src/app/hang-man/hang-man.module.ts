import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibModule } from '../lib/lib.module';

import { HttpClientModule } from '@angular/common/http';
import { HangmanContainerComponent } from './feature/hangman-container/hangman-container.component';
import { HangManRoutingModule } from './hang-man-routing.module';
import { HangmanGallowComponent } from './ui/hangman-gallow/hangman-gallow.component';
import { HangmanLetterButtonComponent } from './ui/hangman-letter-button/hangman-letter-button.component';
import { HangmanLettersPanelComponent } from './ui/hangman-letters-panel/hangman-letters-panel.component';
import { HangmanSidebarComponent } from './ui/hangman-sidebar/hangman-sidebar.component';
import { HangmanStatisticsComponent } from './ui/hangman-statistics/hangman-statistics.component';
import { HangmanWordComponent } from './ui/hangman-word/hangman-word.component';
import { EncryptWordPipe } from './pipe/encrypt-word.pipe';

@NgModule({
	declarations: [
    HangmanContainerComponent,
    HangmanLettersPanelComponent,
    HangmanGallowComponent,
    HangmanStatisticsComponent,
    HangmanLetterButtonComponent,
    HangmanSidebarComponent,
    HangmanWordComponent,
    EncryptWordPipe
  ],
	imports: [CommonModule, HangManRoutingModule, LibModule, HttpClientModule],
})
export class HangManModule {}
