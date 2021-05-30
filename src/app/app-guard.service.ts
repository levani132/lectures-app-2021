import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):
    Promise<boolean> | Observable<boolean> | boolean {
    if (route.url[0].path.length % 2) {
      return true;
    } else {
      this.router.navigate(['/fifth']);
    }
  }
}
