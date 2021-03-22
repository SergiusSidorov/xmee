import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';

import { SigningRouterModule } from './signing-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  imports: [
    SharedModule,
    SigningRouterModule,
  ],
  declarations: [
    LayoutComponent,

    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
})
export class SigninModule {}
