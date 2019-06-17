import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'resume',
    component:ResumeComponent,
  },
  {
    path: 'portfolio',
    component:PortfolioComponent,
  },
  {
    path: 'blog',
    component:PortfolioComponent,
  },
  {
    path: 'contact-us',
    component:ContactUsComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, ResumeComponent, PortfolioComponent, BlogComponent, ContactUsComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RightContentBoxModule { }
