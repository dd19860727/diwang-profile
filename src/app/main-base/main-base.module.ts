import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { MainBaseComponent } from './main-base.component';

const routes: Routes = [
  {
    path: '',
    component:MainBaseComponent,
    children: [
      {
        path: '',
        loadChildren: './right-content-box#RightContentBoxModule'
      }
    ]
  }
];

@NgModule({
  declarations: [MainBaseComponent, LeftSideBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class MainBaseModule { }
