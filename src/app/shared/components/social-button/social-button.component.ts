import { Component, Input, OnInit } from '@angular/core';

import {  IconName } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'social-button',
  templateUrl: './social-button.component.html',
})
export class SocialButtonComponent implements OnInit {

  @Input()
  iconName: IconName | null = null;
  @Input()
  href: string = '#';
  @Input()
  title: string = '';

  constructor() {}

  ngOnInit() {}
}