import { Component, HostBinding, OnInit } from '@angular/core';

import { flowUpAnimation } from '@shared/animations';


@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  animations: [flowUpAnimation],
})
export class ForgotPasswordComponent implements OnInit {

  @HostBinding('@flowUpAnimation')
  public animatePage: number = 0;

  constructor() {}

  ngOnInit() {}
}