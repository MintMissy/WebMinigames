import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibModule } from '../lib/lib.module';

import { HangManRoutingModule } from './hang-man-routing.module';

@NgModule({
	declarations: [],
	imports: [CommonModule, HangManRoutingModule, LibModule],
})
export class HangManModule {}
