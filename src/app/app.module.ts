import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    AppComponent,
    TodosComponent,
  
   ],

  imports:[
     BrowserModule,
     BrowserAnimationsModule,
     FormsModule,
  ],

  providers: [],

  bootstrap: [
     AppComponent
   ],
})


export class AppModule { }