import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardcComponent } from './dashboardc/dashboardc.component';
import { HomeComponent } from './home/home.component';
import { StudentModule } from '../student/student.module';


@NgModule({
  declarations: [
    DashboardcComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports:[
    DashboardcComponent,
  ]
})
export class DashboardModule { }
