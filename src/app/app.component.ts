import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  evenArr = [];
  oddArr = [];
 
  title = 'lectures-app';
  rame(x:number){
    if(x%2==0) {
      this.evenArr.push(x);
    }
    else {
      this.oddArr.push(x);
    }
  }
}