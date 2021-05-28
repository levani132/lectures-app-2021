import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        if(route.url[0].path.length % 2){
            return true;
        } else {
            this.router.navigate(['/fifth']);
        }
    }
}

