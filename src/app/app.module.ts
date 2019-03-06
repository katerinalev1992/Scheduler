import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemBlockComponent} from "../components/item-block/item-block.component";
import {DayBlockComponent} from "../components/day-block/day-block.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemBlockComponent,
    DayBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
