import { HttpClient } from '@angular/common/http';
import { inject, PLATFORM_ID, Service, signal } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { RegisterFormI } from '../../core/auth/components/register/UI/form/form';
import { RegisterResponseI, UserInfo, UserLoginI } from '../../models/model';
import { isPlatformBrowser } from '@angular/common';
import { API_URL } from '../../core/APIURL';

@Service()
export class Auth {
  http = inject(HttpClient);
  platformId = inject(PLATFORM_ID);

  registerUser(formData: RegisterFormI): Observable<RegisterResponseI> {
    return this.http.post<RegisterResponseI>(API_URL.AUTH.REGISTER, formData);
  }

  loginUser(formData: UserLoginI) {
    return this.http.post<RegisterResponseI>(API_URL.AUTH.LOGIN, formData);
  }

  checkToken(): Observable<boolean> {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('TOKEN')) {
        return of(true);
      }
    }
    return of(false);
  }
}
