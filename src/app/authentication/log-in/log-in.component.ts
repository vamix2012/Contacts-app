import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  errorMessage: string;
  hide: boolean = true;
  loginForm: FormGroup;
  credentials: any;
  constructor(
    public authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const emailRegexPattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(emailRegexPattern),
        ],
      ],
      password: ['', [Validators.required]],
    });
    this.loginForm.valueChanges.subscribe((res) => {
      this.credentials = res;
    });
  }
  onSignIn() {
    this.authService
      .signIn(this.credentials.email, this.credentials.password)
      .catch((err) => {
        this.errorMessage = err.message;
      });
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Please enter an email address';
    }
    if (this.email?.hasError('pattern')) {
      return 'Incomplete email address';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
