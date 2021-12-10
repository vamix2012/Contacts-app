import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  errorMessage: string;
  hide: boolean = true;
  signupForm: FormGroup;
  signupCredentials: any;
  constructor(
    public authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const emailRegexPattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
    this.signupForm.valueChanges.subscribe((res) => {
      this.signupCredentials = res;
      console.log(this.signupCredentials);
    });
  }
  onSignUp() {
    if (!this.signupForm.invalid) {
      let fullName =
        this.signupCredentials.firstName +
        ' ' +
        this.signupCredentials.lastName;
      this.authService
        .signUp(
          this.signupCredentials.email,
          this.signupCredentials.password,
          fullName
        )
        .catch((err) => {
          this.errorMessage = err.message;
        });
    }
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

  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
