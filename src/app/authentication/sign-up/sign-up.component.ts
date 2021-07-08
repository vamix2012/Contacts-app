import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  errorMessage: string;
  constructor(public authService: AuthenticationService) {}

  ngOnInit(): void {}
  onSignUp(email, password, displayName) {
    this.authService.signUp(email, password, displayName).catch((err) => {
      this.errorMessage = err.message;
    });
  }
}
