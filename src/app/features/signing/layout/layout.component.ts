import { Component, HostBinding, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import { flowUpAnimation } from '@shared/animations';


@Component({
  selector: 'signing-layout',
  templateUrl: './layout.component.html',
  animations: [flowUpAnimation],
})
export class LayoutComponent implements OnInit {
  public isBrowser = false;

  @HostBinding('@flowUpAnimation')
  public animatePage: number = 0;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: string,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.animatePage++;
      }
    });
  }
}