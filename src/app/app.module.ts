import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// add line below
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    DashboardComponent //  ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, BrowserAnimationsModule, ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
