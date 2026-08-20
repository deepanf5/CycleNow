import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  email,
  form,
  required,
  FormField,
  minLength,
  validate,
  submit,
  maxLength,
} from '@angular/forms/signals';
import { Component, computed, signal, inject, PLATFORM_ID, DestroyRef } from '@angular/core';
import { Auth } from '../../../../../../services/auth/auth';

import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { NgIcon } from '@ng-icons/core';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { toast } from '@spartan-ng/brain/sonner';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export interface RegisterFormI {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'r-form',
  imports: [
    HlmButton,
    HlmInputImports,
    HlmFieldImports,
    HlmCheckboxImports,
    HlmInputGroupImports,
    HlmToasterImports,
    NgIcon,
    FormField,
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  // Signal form
  initialState = { userName: '', email: '', password: '', confirmPassword: '' };
  model = signal<RegisterFormI>(this.initialState);
  router = inject(Router);
  authService = inject(Auth);
  platformId = inject(PLATFORM_ID);
  destoryRef = inject(DestroyRef);

  protected inputType = signal<'text' | 'password'>('password');
  protected inputTypeforConfirm = signal<'text' | 'password'>('password');
  readonly icon = computed(() => (this.inputType() === 'password' ? 'lucideEye' : 'lucideEyeOff'));
  readonly iconConfirm = computed(() =>
    this.inputTypeforConfirm() === 'password' ? 'lucideEye' : 'lucideEyeOff',
  );

  registerform = form(this.model, (s) => {
    (required(s.userName, { message: 'User Name is required' }),
      minLength(s.userName, 3, { message: 'User Name is atleast 3 characters' }),
      maxLength(s.userName, 25, { message: 'User Name cannot have more the 25 characters' }),
      required(s.email, { message: 'Email is Required' }),
      email(s.email, { message: 'Please Enter a valid email Id' }),
      required(s.password, { message: 'Password is required' }),
      minLength(s.password, 8, { message: 'Password must be greater than 8 character' }),
      maxLength(s.password, 100, { message: 'Password max limit Reached' }),
      validate(s.password, ({ value }) => {
        const password = value();
        if (!password) return null;
        if (password.trim().includes(' ')) {
          return {
            kind: 'no_spaces',
            message: 'your password cannot contain space',
          };
        }
        return null;
      }),
      required(s.confirmPassword, { message: 'Confirm Password is required' }));
    validate(s.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(s.password);
      if (!confirmPassword || !password) return null;
      if (password !== confirmPassword) {
        return {
          kind: 'password_missMatch',
          message: 'Password  do Not Match',
        };
      }
      return null;
    });
  });

  toggle() {
    this.inputType.update((type) => (type === 'password' ? 'text' : 'password'));
  }

  toogleConfirm() {
    this.inputTypeforConfirm.update((type) => (type === 'password' ? 'text' : 'password'));
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    submit(this.registerform, async () => {
      const formData = this.registerform().value();
      this.authService
        .registerUser(formData)
        .pipe(takeUntilDestroyed(this.destoryRef))
        .subscribe({
          next: (res) => {
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('TOKEN', res.token);
              localStorage.setItem('USERINFO', JSON.stringify(res.userInfo));
            }
            this.toastMessage(res.message);
            this.registerform().reset(this.initialState);
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            console.error(err);
          },
        });
    });
  }

  toastMessage(message: string) {
    toast(message, {
      position: 'top-right',
    });
  }
}
