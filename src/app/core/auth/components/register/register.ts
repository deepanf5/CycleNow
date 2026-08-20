import { Component, computed, signal } from '@angular/core';

import { HlmButton } from '@spartan-ng/helm/button';

import { hlmH1 } from '@spartan-ng/helm/typography';
import { hlmBlockquote } from '@spartan-ng/helm/typography';
import { Form } from './UI/form/form';
import { RegisterOptions } from './UI/register-options/register-options';

@Component({
  selector: 'app-register',
  imports: [HlmButton, Form, RegisterOptions],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  title = hlmH1;
  quote = hlmBlockquote;
  readonly date = new Date().getFullYear();

  

}
