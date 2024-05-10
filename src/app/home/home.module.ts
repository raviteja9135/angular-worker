import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CommonUtilsModule } from '../common-utils/common-utils.module';



@NgModule({
  declarations: [DashboardComponent,HomeComponent],
  imports: [
    CommonModule,
    CommonUtilsModule
  ]
})
export class HomeModule { }
