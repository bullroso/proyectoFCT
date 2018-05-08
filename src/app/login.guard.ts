import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('email') === null ) {
      // ir a login (no se ha iniciado sesion)
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
