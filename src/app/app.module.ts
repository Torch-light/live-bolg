import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {router} from './router/router.module';
import { HeadComponent } from './component/head/head.component';
import { HomeComponent } from './page/home/home.component';
import { ColorplaneComponent } from './component/colorplane/colorplane.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ColorplaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
