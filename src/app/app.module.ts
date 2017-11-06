import { routing } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    SuiModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
