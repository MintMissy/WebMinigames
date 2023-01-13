import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoCardsContainerComponent } from './memo-cards-container.component';

describe('MemoCardsContainerComponent', () => {
  let component: MemoCardsContainerComponent;
  let fixture: ComponentFixture<MemoCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoCardsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
