import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  errorMessage: string;
  constructor(public authService: AuthenticationService) {}

  ngOnInit(): void {}
  onSignIn(email, password) {
    this.authService.signIn(email, password).catch((err) => {
      this.errorMessage = err.message;
    });
  }
}
