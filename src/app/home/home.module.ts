import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CommonUtilsModule } from '../common-utils/common-utils.module';
import { HomeRouterModule } from './home.router.module';



@NgModule({
  declarations: [DashboardComponent,HomeComponent],
  imports: [
    CommonModule,
    CommonUtilsModule,
    HomeRouterModule
  ]
})
export class HomeModule { }
