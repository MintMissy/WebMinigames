import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoCardsContainerComponent } from './feature/memo-cards-container/memo-cards-container.component';

const routes: Routes = [{ path: '', component: MemoCardsContainerComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MemoCardsRoutingModule {}
