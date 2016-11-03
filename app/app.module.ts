import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent }   from './Components/app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
@NgModule({
  imports:      [ 
                  BrowserModule,
                  FormsModule 
                ],
  declarations: [ 
                  AppComponent,
                  LoginComponent,
                  HomeComponent
                ],
  bootstrap:    [ 
                  AppComponent,
                  LoginComponent,
                  HomeComponent
                ]
})
export class AppModule { }
