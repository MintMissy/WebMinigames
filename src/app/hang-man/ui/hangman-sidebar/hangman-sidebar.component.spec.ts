import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanSidebarComponent } from './hangman-sidebar.component';

describe('HangmanSidebarComponent', () => {
  let component: HangmanSidebarComponent;
  let fixture: ComponentFixture<HangmanSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
