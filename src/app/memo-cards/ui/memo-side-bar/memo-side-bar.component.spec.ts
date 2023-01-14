import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoSideBarComponent } from './memo-side-bar.component';

describe('MemoSideBarComponent', () => {
  let component: MemoSideBarComponent;
  let fixture: ComponentFixture<MemoSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
