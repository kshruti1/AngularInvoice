 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { DashboardComponent } from '../dashboard/dashboard.component';
 import { PieChartComponent } from '../pie-chart/pie-chart.component';

 const routes: Routes = [
        {path: '', component: DashboardComponent },
        {path: 'Pie-Chart', component: PieChartComponent},
        {path: '*', component: PieChartComponent}
    ];

 @NgModule({
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
    export class AppRoutingModule { }
