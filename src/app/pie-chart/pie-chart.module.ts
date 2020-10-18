import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart.component';

@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    CommonModule,
    PieChartComponent,
    ChartsModule
  ]
})
export class PieChartModule { }
