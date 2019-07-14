import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class LoginUrlRedirectResolver implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {

      window.location.href = route.data['backendLoginUrl'];
      return true;

  }
}