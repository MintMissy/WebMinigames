import { Pipe, PipeTransform } from '@angular/core';

export interface ElapsedTime {
	seconds: number;
	minutes: number;
}

@Pipe({
	name: 'elapsedTime',
})
export class ElapsedTimePipe implements PipeTransform {
	transform(startTimeStamp: number): ElapsedTime {
		const timeDifference = Date.now() - startTimeStamp;

		return {
			minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
			seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
		};
	}
}
