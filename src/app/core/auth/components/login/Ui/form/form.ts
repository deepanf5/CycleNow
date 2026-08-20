import { Component, computed, signal, inject, DestroyRef, PLATFORM_ID } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Auth } from '../../../../../../services/auth/auth';

import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { toast } from '@spartan-ng/brain/sonner';
import { NgIcon } from '@ng-icons/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'l-form',
  imports: [
    FormField,
    HlmButton,
    NgIcon,
    HlmInputImports,
    HlmFieldImports,
    HlmCheckboxImports,
    HlmToasterImports,
    HlmInputGroupImports,
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  formInitalState = {
    email: '',
    password: '',
  };

  inputType = signal<string>('password');
  icon = computed(() => (this.inputType() === 'password' ? 'lucideEye' : 'lucideEyeOff'));
  authService = inject(Auth);
  destroyRef = inject(DestroyRef);
  platformId = inject(PLATFORM_ID);
  router = inject(Router);

  model = signal(this.formInitalState);
  loginform = form(this.model, (s) => {
    required(s.email, { message: 'Email is required' });
    email(s.email, { message: 'Please Enter a valid Email' });
    required(s.password, { message: 'Password is Required' });
  });

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    submit(this.loginform, async () => {
      const formData = this.loginform().value();
      this.authService
        .loginUser(formData)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (res) => {
            {
              if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem('TOKEN', res.token);
                localStorage.setItem('USERINFO', JSON.stringify(res.userInfo));
              }
              this.toastSuccess(res.message, 'Success');
              this.router.navigate(['/dashboard']);
            }
          },
          error: (error: HttpErrorResponse) => {
            this.toastFailure(error.error.message, 'Error');
          },
        });
    });
  }

  toogleConfirm() {
    this.inputType.update((val) => (val === 'password' ? 'text' : 'password'));
  }

  toastSuccess(message: string, toastType: string) {
    toast.success(toastType, {
      description: message,
      position: 'top-right',
    });
  }

  toastFailure(message: string, toastType: string) {
    toast.error(toastType, {
      description: message,
      position: 'top-right',
    });
  }
}
