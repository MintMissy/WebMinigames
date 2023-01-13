import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoProgressBarComponent } from './memo-progress-bar.component';

describe('MemoProgressBarComponent', () => {
	let component: MemoProgressBarComponent;
	let fixture: ComponentFixture<MemoProgressBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MemoProgressBarComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MemoProgressBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
