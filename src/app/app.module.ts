import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { ClickMe2Component } from './click-me2.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './keyup.components';
import { LittleTourComponent } from './little-tour.component';
import { LoopbackComponent } from './loop-back.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMe2Component,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/