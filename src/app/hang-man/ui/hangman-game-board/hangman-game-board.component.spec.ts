import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanGameBoardComponent } from './hangman-game-board.component';

describe('HangmanGameBoardComponent', () => {
  let component: HangmanGameBoardComponent;
  let fixture: ComponentFixture<HangmanGameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanGameBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
