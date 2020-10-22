import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart.component';
let PieChartModule = class PieChartModule {
};
PieChartModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            PieChartComponent
        ],
        imports: [
            CommonModule,
            PieChartComponent,
            ChartsModule
        ]
    })
], PieChartModule);
export { PieChartModule };
//# sourceMappingURL=pie-chart.module.js.map