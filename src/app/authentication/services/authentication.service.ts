import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLogedIn: boolean = false;
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {}

  async signIn(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLogedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        window.location.href = 'list';
      });
  }

  async signUp(email: string, password: string, displayName: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.updateProfile({
          displayName: displayName,
        });
        this.router.navigate(['auth/login']);
      });
  }

  logOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('user');
  }
}
