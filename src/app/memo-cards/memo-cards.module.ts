import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibModule } from '../lib/lib.module';
import { MemoCardsContainerComponent } from './feature/memo-cards-container/memo-cards-container.component';

import { MemoCardsRoutingModule } from './memo-cards-routing.module';
import { MemoCardComponent } from './ui/memo-card/memo-card.component';
import { MemoCardsBoardComponent } from './ui/memo-cards-board/memo-cards-board.component';
import { MemoSideBarComponent } from './ui/memo-side-bar/memo-side-bar.component';
import { MemoStatisticsComponent } from './ui/memo-statistics/memo-statistics.component';

@NgModule({
	declarations: [
		MemoCardsContainerComponent,
		MemoCardsBoardComponent,
		MemoSideBarComponent,
		MemoStatisticsComponent,
		MemoCardComponent,
	],
	imports: [CommonModule, MemoCardsRoutingModule, LibModule],
})
export class MemoCardsModule {}
