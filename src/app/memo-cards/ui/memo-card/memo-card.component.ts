import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-memo-card',
  templateUrl: './memo-card.component.html',
  styleUrls: ['./memo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoCardComponent {}
