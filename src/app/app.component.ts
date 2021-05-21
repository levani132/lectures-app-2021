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
  onIncrement(num: number){
    if(num % 2 == 0){
      this.evens.push(num);
      console.log(this.evens);
    } else {
      this.odds.push(num);
      console.log(this.odds);
    }
  }
}

