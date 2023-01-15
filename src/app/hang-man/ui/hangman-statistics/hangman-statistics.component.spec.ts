import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanStatisticsComponent } from './hangman-statistics.component';

describe('HangmanStatisticsComponent', () => {
  let component: HangmanStatisticsComponent;
  let fixture: ComponentFixture<HangmanStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
