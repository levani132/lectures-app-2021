import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  numberOfSteps = 0;
  ActiveCount = false;

  addCount() {
    this.numberOfSteps++;
    this.ActiveCount = true;
    setTimeout(() => {
      this.ActiveCount = !this.ActiveCount;
    }, 2000);
  }
}
