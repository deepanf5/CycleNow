import { HttpClient } from '@angular/common/http';
import { inject, PLATFORM_ID, Service, signal } from '@angular/core';

import { Observable, of, tap } from 'rxjs';
import { RegisterFormI } from '../../core/auth/components/register/UI/form/form';
import { RegisterResponseI } from '../../models/model';
import { isPlatformBrowser } from '@angular/common';

@Service()
export class Auth {
  APIURL = '/api/register';
  http = inject(HttpClient);
  platformId = inject(PLATFORM_ID);

  registerUser(formData: RegisterFormI): Observable<RegisterResponseI> {
    return this.http.post<RegisterResponseI>(this.APIURL, formData);
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
