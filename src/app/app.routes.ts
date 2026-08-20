import { Routes } from '@angular/router';

import { Register } from './core/auth/components/register/register';
import { Login } from './core/auth/components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
    title: 'login',
  },
  {
    path: 'register',
    component: Register,
    title: 'register',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/components/dashboard/dashboard').then((c) => c.Dashboard),
    title: 'Dashboard',
    canActivate: [authGuard],
  },
];
