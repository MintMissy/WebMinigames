import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MemoCardsContainerComponent } from './feature/memo-cards-container/memo-cards-container.component';

import { MemoCardsRoutingModule } from './memo-cards-routing.module';
import { MemoCardsBoardComponent } from './ui/memo-cards-board/memo-cards-board.component';
import { MemoCardComponent } from './ui/memo-card/memo-card.component';
import { MemoSideBarComponent } from './ui/memo-side-bar/memo-side-bar.component';
import { MemoStatisticsComponent } from './ui/memo-statistics/memo-statistics.component';
import { MemoProgressBarComponent } from './ui/memo-progress-bar/memo-progress-bar.component';
import { ElapsedTimePipe } from './pipe/elapsed-time.pipe';

@NgModule({
	declarations: [
		MemoCardsContainerComponent,
		MemoCardsBoardComponent,
		MemoSideBarComponent,
		MemoStatisticsComponent,
		MemoCardComponent,
		MemoProgressBarComponent,
  ElapsedTimePipe,
	],
	imports: [CommonModule, MemoCardsRoutingModule],
})
export class MemoCardsModule {}
