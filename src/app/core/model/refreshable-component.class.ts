import { ChangeDetectorRef, Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
	template: '',
})
export abstract class RefreshableComponent implements OnInit, OnDestroy {
	private changeDetector: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);

	private subscription!: Subscription;
	private interval$: Observable<number>;

	constructor(private injector: Injector, @Inject('REFRESH_RATE') refreshRateInMillis: number) {
		this.interval$ = interval(refreshRateInMillis);
	}

	abstract onComponentRefresh(): void;

	ngOnInit(): void {
		this.subscription = this.interval$.subscribe((_) => {
			this.onComponentRefresh();
			this.changeDetector.markForCheck();
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
