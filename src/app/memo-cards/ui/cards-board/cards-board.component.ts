import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cards-board',
  templateUrl: './cards-board.component.html',
  styleUrls: ['./cards-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsBoardComponent {}
