import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule
  ],
  exports:[RegistrationComponent]
})
export class SignupModule { }
