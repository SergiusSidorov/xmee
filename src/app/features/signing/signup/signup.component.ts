import { Component, HostBinding, OnInit } from '@angular/core';

import { flowUpAnimation } from '@shared/animations';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  animations: [flowUpAnimation],
})
export class SignupComponent implements OnInit {

  @HostBinding('@flowUpAnimation')
  public animatePage: number = 0;

  constructor() {}

  ngOnInit() {}
}