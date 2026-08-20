import { Component, inject, OnInit, signal, DestroyRef } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { Auth } from '../../../../../../services/auth/auth';
import { UserInfo } from '../../../../../../models/model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'l-login-options',
  imports: [HlmButton],
  templateUrl: './login-options.html',
  styleUrl: './login-options.css',
})
export class LoginOptions {}
