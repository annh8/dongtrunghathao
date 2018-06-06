import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }
  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }
  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
  isLoggedIn() {
    this.user = this._firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
  changepass(newPassword) {
    const user = this._firebaseAuth.auth.currentUser;
    user.updatePassword(newPassword).then(function() {
      alert('Change pass thành công');
    }).catch(function(error) {
      // An error happened.
    });
  }
}
