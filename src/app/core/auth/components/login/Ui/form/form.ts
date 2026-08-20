import { Component, computed, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';

import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'l-form',
  imports: [
    FormField,
    HlmButton,
    HlmInputImports,
    HlmFieldImports,
    HlmCheckboxImports,
    NgIcon,
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
      console.log(formData);
    });
  }

  toogleConfirm() {
    this.inputType.update((val) => (val === 'password' ? 'text' : 'password'));
  }
}
