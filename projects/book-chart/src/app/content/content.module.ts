import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgChartsModule
  ]
})
export class ContentModule { }
