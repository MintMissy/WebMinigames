import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MemoCardsContainerComponent } from './feature/memo-cards-container/memo-cards-container.component';

import { MemoCardsRoutingModule } from './memo-cards-routing.module';
import { CardsBoardComponent } from './ui/cards-board/cards-board.component';
import { MemoCardComponent } from './ui/memo-card/memo-card.component';
import { SideBarComponent } from './ui/side-bar/side-bar.component';
import { StatisticsComponent } from './ui/statistics/statistics.component';

@NgModule({
	declarations: [
		MemoCardsContainerComponent,
		CardsBoardComponent,
		SideBarComponent,
		StatisticsComponent,
		MemoCardComponent,
	],
	imports: [CommonModule, MemoCardsRoutingModule],
})
export class MemoCardsModule {}
