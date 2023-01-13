import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-memo-cards-container',
  templateUrl: './memo-cards-container.component.html',
  styleUrls: ['./memo-cards-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoCardsContainerComponent {}
