import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lectures-app';
  odds = [];
  evens = [];

  onIncrement(num :number){
    if (num % 2 === 1){
      this.odds.push(num);
    }
    else
      this.evens.push(num);
      console.log(2);
  }
}
