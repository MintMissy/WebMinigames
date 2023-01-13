import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/page/home/home.component';

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
  },
  {
    path: '*',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
