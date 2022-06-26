import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BaseComponent } from './base/base.component';
import { DerivedComponent } from './derived/derived.component';
import { UtilsService } from './utils.service';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BaseComponent, DerivedComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UtilsService, AppService]
})
export class AppModule { }
