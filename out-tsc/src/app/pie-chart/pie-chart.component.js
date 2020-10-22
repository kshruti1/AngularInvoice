import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
let PieChartComponent = class PieChartComponent {
    constructor() {
        this.pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
        this.pieChartData = [120, 150, 180, 90];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }
    ngOnInit() {
        this.pieChartData = [120, 150, 180, 90];
    }
    onChartClick(event) {
        console.log(event);
    }
};
PieChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pie-chart',
        templateUrl: './pie-chart.component.html',
        styleUrls: ['./pie-chart.component.css']
    })
], PieChartComponent);
export { PieChartComponent };
//# sourceMappingURL=pie-chart.component.js.map