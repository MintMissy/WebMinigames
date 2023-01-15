import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanLetterButtonComponent } from './hangman-letter-button.component';

describe('HangmanLetterButtonComponent', () => {
  let component: HangmanLetterButtonComponent;
  let fixture: ComponentFixture<HangmanLetterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanLetterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanLetterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
