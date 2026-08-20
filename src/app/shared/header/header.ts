import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { UserInfo } from '../../models/model';

import { isPlatformBrowser } from '@angular/common';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-header',
  imports: [HlmAvatarImports, HlmButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  userInfo = signal<UserInfo>({
    userName: '',
    email: '',
  });

  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userInfo = localStorage.getItem('USERINFO');
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        this.userInfo.set(parsedInfo);
      }
    }
  }
}
