import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router, private authService: AuthService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
              if (!authenticated) {
                  this.router.navigate(['/administrator/auth/login']);
              }
            });
  }
}