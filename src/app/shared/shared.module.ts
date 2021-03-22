import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedLibrariesModule } from './libraries';
import { ComponentsModule } from './components';


@NgModule({
  exports: [
    CommonModule,

    SharedLibrariesModule,
    ComponentsModule,
  ],
})
export class SharedModule {}
