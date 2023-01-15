import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanGallowComponent } from './hangman-gallow.component';

describe('HangmanGallowComponent', () => {
  let component: HangmanGallowComponent;
  let fixture: ComponentFixture<HangmanGallowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanGallowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanGallowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
