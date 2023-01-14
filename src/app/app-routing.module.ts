import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'memocards',
    loadChildren: () =>
      import('./memo-cards/memo-cards.module').then((m) => m.MemoCardsModule),
  },
  {
    path: 'hangman',
    loadChildren: () =>
      import('./hang-man/hang-man.module').then((m) => m.HangManModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
