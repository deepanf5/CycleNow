import { Component } from '@angular/core';
import { Form } from './Ui/form/form';
import { LoginOptions } from './Ui/login-options/login-options';

@Component({
  selector: 'app-login',
  imports: [Form, LoginOptions],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
