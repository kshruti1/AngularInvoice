import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
const routes = [
    { path: '', component: DashboardComponent },
    { path: 'Pie-Chart', component: PieChartComponent },
    { path: '*', component: PieChartComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes)
            //PieChartComponent
        ],
        exports: [
            RouterModule
            //PieChartComponent
        ],
        declarations: [
        //PieChartComponent
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map