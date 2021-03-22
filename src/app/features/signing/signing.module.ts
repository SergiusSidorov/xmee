import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SigningRouterModule } from './signing-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  imports: [
    SharedModule,
    SigningRouterModule,
  ],
  declarations: [
    LayoutComponent,
    SigninComponent,
  ],
})
export class SigninModule {}
