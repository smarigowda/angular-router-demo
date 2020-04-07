import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('ActivatedRouteSnapshot', destination);
    console.log('RouterStateSnapshot', state);
    const loggedIn = Math.random() < 0.5;
    // Uncomment the following lines to test login guard
    // if (!loggedIn) {
    //   alert('You  are not logged in, redirecting to Home page');
    //   this.router.navigateByUrl('/');
    //   return false;
    // }
    return true;
  }
}
