import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = 0;
  activity = false;
  private timeoutRef;

  RaiseCounter() {
    this.counter += 1;
    this.activity = true;
  }

  ShowCounter() {
    clearTimeout(this.timeoutRef);
    this.timeoutRef = setTimeout(() => {
      this.activity = false;
    }, 2000);
  }
}
