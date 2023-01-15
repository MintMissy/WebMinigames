import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanContainerComponent } from './feature/hangman-container/hangman-container.component';

const routes: Routes = [{ path: '', component: HangmanContainerComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HangManRoutingModule {}
