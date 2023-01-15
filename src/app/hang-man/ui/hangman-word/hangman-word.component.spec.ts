import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanWordComponent } from './hangman-word.component';

describe('HangmanWordComponent', () => {
  let component: HangmanWordComponent;
  let fixture: ComponentFixture<HangmanWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
