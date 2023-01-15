import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanContainerComponent } from './hangman-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('HangmanContainerComponent', () => {
  let component: HangmanContainerComponent;
  let fixture: ComponentFixture<HangmanContainerComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ HangmanContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
