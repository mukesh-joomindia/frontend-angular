import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninModule} from './signin/signin.module';
import {SignupModule} from './signup/signup.module';
import { UserVerficationModule } from "./user-verfication/user-verfication.module";
import { LoginComponent } from './signin/login/login.component';
import { RegistrationComponent } from './signup/registration/registration.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SigninModule,
    SignupModule,
    UserVerficationModule
  ],
  exports:[LoginComponent,RegistrationComponent]
})
export class AuthModule { }
