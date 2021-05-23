import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numList = [];
  count = 0;
  ref;
  title = 'lectures-app';

  onInterval(){
    this.ref = setInterval(
        ()=>{
          this.count++;
          this.numList.push(this.count);
        },
        1000);
  }
  stopInterval(){
    clearInterval(this.ref);
  }
}
