import { Component, OnInit } from '@angular/core';

import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

   public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];

  public pieChartData = [120, 150, 180, 90];

  public pieChartType = 'pie';

  public pieChartLegend = true;

  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
     this.pieChartData = [120, 150, 180, 90];
  }

   onChartClick(event) {
        console.log(event);
    }
}

