import { Component, HostBinding, OnInit } from '@angular/core';

import { flowUpAnimation } from '@shared/animations';


@Component({
  selector: 'sigin',
  templateUrl: './signin.component.html',
  animations: [flowUpAnimation],
})
export class SigninComponent implements OnInit {

  @HostBinding('@flowUpAnimation')
  public animatePage: number = 0;

  constructor() {}

  ngOnInit() {}
}