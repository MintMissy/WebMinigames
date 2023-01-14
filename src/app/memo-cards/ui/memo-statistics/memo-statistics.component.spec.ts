import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoStatisticsComponent } from './memo-statistics.component';

describe('MemoStatisticsComponent', () => {
  let component: MemoStatisticsComponent;
  let fixture: ComponentFixture<MemoStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoStatisticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
