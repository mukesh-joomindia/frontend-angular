import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
//importing gridster component
import { GridsterModule } from "angular-gridster2";


@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,GridsterModule,
  ]
  ,
  exports:[MainDashboardComponent]
})
export class DashboardModule { }
