import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent
   ],

  imports:[
     BrowserModule,
     RouterModule.forRoot(routes),
     AppRoutingModule,
     BrowserAnimationsModule,
     MatToolbarModule,    
     MatIconModule, 
  ],

  providers: [],

  bootstrap: [
     AppComponent
   ],
})


export class AppModule { }