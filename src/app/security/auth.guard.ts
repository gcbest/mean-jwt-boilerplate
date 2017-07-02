import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router)

  canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
      this.authService.authInfo$
        .map(authInfo => authInfo.isLoggedIn())
        .take(1)
        .do(allowed => {
          if(!allowed) {
            this.router.navigate(['/signup'])
          }
        })
      return undefined;
    }
}
