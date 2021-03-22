import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { SocialButtonComponent } from './social-button.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    SocialButtonComponent,
  ],
  exports: [
    SocialButtonComponent,
  ]
})
export class SocialButtonModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
  }
}
