import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ElapsedTimePipe } from './pipe/elapsed-time.pipe';
import { HomeComponent } from './page/home/home.component';


@NgModule({
  declarations: [ElapsedTimePipe, HomeComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
