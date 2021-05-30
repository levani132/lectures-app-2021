import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FifthService } from "./fifth.service";

@Injectable({
    providedIn: 'root'
})
export class fifthResolver implements Resolve<string[]>{
    
    constructor(private fifthService: FifthService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Promise<string[]> | Observable<string[]> | string[] {
        return this.fifthService.getPeople();
    }
}