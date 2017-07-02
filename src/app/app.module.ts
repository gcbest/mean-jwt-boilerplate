import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SelectTopicComponent } from './select-topic/select-topic.component';
import { SignupComponent } from './signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import {AuthGuard} from "app/security/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    SelectTopicComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
