import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
//importing gridster component
import { GridsterModule } from "angular-gridster2";
import { AnalyticsComponent } from './analytics/analytics.component';


@NgModule({
  declarations: [MainDashboardComponent, AnalyticsComponent],
  imports: [
    CommonModule,GridsterModule,
  ]
  ,
  exports:[MainDashboardComponent]
})
export class DashboardModule { }
