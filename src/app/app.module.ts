import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserModule } from '@angular/platform-browser';
import Web3 from 'web3';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PresaleComponent } from './presale/presale.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PresaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [Web3],
  bootstrap: [AppComponent]
})
export class AppModule { }
