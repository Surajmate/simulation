import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },{
    path: 'signup',
    component: SignupComponent
  },{
    path: 'home',
    component: DashboardComponent
  },{
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
