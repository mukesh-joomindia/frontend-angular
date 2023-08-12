import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [LoginComponent, ForgotpasswordComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent,ForgotpasswordComponent]
})
export class SigninModule { }
