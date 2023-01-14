import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoCardsBoardComponent } from './memo-cards-board.component';

describe('MemoCardsBoardComponent', () => {
  let component: MemoCardsBoardComponent;
  let fixture: ComponentFixture<MemoCardsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoCardsBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoCardsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
