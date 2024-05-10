import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HomeModule } from './home/home.module';
import { AppRouterModule } from './app.router.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
