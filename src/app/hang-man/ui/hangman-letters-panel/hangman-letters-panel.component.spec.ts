import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanLettersPanelComponent } from './hangman-letters-panel.component';

describe('HangmanLettersPanelComponent', () => {
  let component: HangmanLettersPanelComponent;
  let fixture: ComponentFixture<HangmanLettersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanLettersPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanLettersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
