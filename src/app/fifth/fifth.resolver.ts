import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { FifthService } from "./fifth.service";

@Injectable({
    providedIn: 'root'
})
export class FifthResolver implements Resolve<string[]> {

    constructor(private fifthService: FifthService) {}

    resolve (){
        return this.fifthService.getPeople();
    }
}