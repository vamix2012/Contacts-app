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
        localStorage.setItem('user', JSON.stringify(res.user));
        this.isLogedIn = true;
        window.location.href = '';
      });
  }

  async signUp(email: string, password: string, displayName: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.updateProfile({
          displayName: displayName,
        });
        this.signIn(email, password);
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
