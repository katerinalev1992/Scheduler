import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemBlockComponent} from "../components/item-block/item-block.component";
import {DayBlockComponent} from "../components/day-block/day-block.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {MatDialogModule} from "@angular/material";
import {AddEventComponent} from "../components/add-event/add-event.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemBlockComponent,
    DayBlockComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
  ],
  entryComponents: [AddEventComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
