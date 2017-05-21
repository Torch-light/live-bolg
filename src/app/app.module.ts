import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {router} from './router/router.module';
import { HeadComponent } from './component/head/head.component';
import { ColorplaneComponent } from './component/colorplane/colorplane.component';
import { SlideDirective } from './directive/slide.directive';
import { OnresizeDirective } from './directive/onresize.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ColorplaneComponent,
    SlideDirective,
    OnresizeDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
