import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from '../page/home/home.component';
import {ColorplaneComponent} from '../component/colorplane/colorplane.component';
import {AppComponent} from '../app.component';
import { MaterialModule } from '@angular/material';
const appRoutes: Routes = [
  { path: '', component: ColorplaneComponent },
  { path: 'bolg', component: HomeComponent },
];
@NgModule({
  declarations:[
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class router {
  
}