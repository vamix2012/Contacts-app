import { AuthenticationService } from './../../../authentication/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser;
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    if (localStorage.getItem('user'))
      this.currentUser = JSON.parse(localStorage.getItem('user'));
    else this.currentUser = '';
  }

  onLogout() {
    this.authService.logOut();
  }
}
