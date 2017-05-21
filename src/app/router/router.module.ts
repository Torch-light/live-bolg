import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {BolgComponent} from '../page/bolg/bolg.component';
import {ColorplaneComponent} from '../component/colorplane/colorplane.component';
import {AppComponent} from '../app.component';
import { MaterialModule } from '@angular/material';
const appRoutes: Routes = [
  { path: '', component: ColorplaneComponent },
  { path: 'bolg', component: BolgComponent },
];
@NgModule({
  declarations:[
    BolgComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class router {
  
}