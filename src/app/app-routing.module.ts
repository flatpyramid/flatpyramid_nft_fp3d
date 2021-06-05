import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PresaleComponent } from './presale/presale.component';

const routes: Routes = [
  {
    path:'', component:LandingComponent,
  }, 
  {
    path:'presale', component:PresaleComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
