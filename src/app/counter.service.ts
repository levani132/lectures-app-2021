import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterService{

    counter = 0;
    flag = false;
    private timeoutRef;

    increase(){

        this.counter ++;
        this.flag = true;

        clearTimeout(this.timeoutRef);
        this.timeoutRef = setTimeout(() => {
            this.flag = false;
        }, 2000);

    }

}