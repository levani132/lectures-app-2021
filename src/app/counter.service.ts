import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Counter{
    counter = 0;
    showCount = false;
    to;

    increase(){
        this.counter++;
        this.showCounter();
    }

    showCounter(){
        this.showCount = true;
        this.to = setTimeout(()=>{this.showCount = false;},
                            2000);
    }
}
