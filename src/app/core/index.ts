import { AppRoutingModule } from './router/app-routing.module';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonServiceModule } from '../common/service';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    imports: [
      CommonServiceModule,
      HttpClientModule,
      AppRoutingModule,
    ],
    exports: [
      AppRoutingModule,
      CommonServiceModule
    ],
    providers: [],
    declarations: [
      PageNotFoundComponent,
    ]
  })

export class CoreModule {
    
}