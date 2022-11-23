import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { TutorialsComponent } from '../components/tutorials/tutorials.component';
import { ContactComponent } from '../contact/contact.component';
import { AuthGuard } from '../service/auth.guard';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },{
    path: 'signup',
    component: SignupComponent
  },
  // {path: '**', component: PagenotfoundComponent},
  
  {path: '', component: DashboardComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'contact'   , component: ContactComponent}, 
  {
    path: '',
    component: DashboardComponent,
    children:[
      {path: '', component: DashboardComponent},
      {path: 'home', component: DashboardComponent},
    ],canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
