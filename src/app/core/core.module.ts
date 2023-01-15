import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ElapsedTimePipe } from './pipe/elapsed-time.pipe';

@NgModule({
	declarations: [ElapsedTimePipe, HomeComponent],
	imports: [CommonModule, CoreRoutingModule, HttpClientModule],
})
export class CoreModule {}
