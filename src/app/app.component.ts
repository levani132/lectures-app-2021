import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lectures-app';
  Odds = [];
  Evens = [];
  increment(num: number) { 
    if (num % 2) { 
      this.Odds.push(num);
    } else {
      this.Evens.push(num);
    }
  }
}
