import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'core/page-not-found';
import { BackendDashboardComponent } from 'core/backend-dashboard';
import { LoginUrlRedirectResolver } from 'core/backend-dashboard/guards/login-url-redirect-resolver';

const routes: Routes = [
  {
    path:'',
    loadChildren:'main-base#MainBaseModule'
  },
  {
    path:'api',
    component:LoginUrlRedirectResolver,
    canActivate:[LoginUrlRedirectResolver],
    data:{
      backendLoginUrl:'https://www.diwang727.info/api/login'
    }
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers:[LoginUrlRedirectResolver],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){

  }
}
