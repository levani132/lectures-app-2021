import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class authGuard implements CanActivate{
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
        console.log(state.url,state.url.length);
        if (state.url.length%2 !==0) {
            return true;
        }
        this.router.navigate(['/fifth']);
    }
}
