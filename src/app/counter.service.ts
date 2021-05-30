import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;
  increaseOn = false;

  constructor() { }

  increaseCounter() {
    this.counter++;
    this.increaseOn = true;
    setTimeout(()=>{
      this.increaseOn = false;
    },2000)
  }
}
