import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Web3 from 'web3';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PresaleComponent } from './presale/presale.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PresaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [Web3],
  bootstrap: [AppComponent]
})
export class AppModule { }
