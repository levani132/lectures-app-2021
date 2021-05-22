import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numListEven = [];
  numListOdd = [];
  count = 0;
  ref;
  title = 'lectures-app';

  onInterval(){
    this.ref = setInterval(
        ()=>{
          this.count++;
          if(this.count%2 === 0){
            this.numListEven.push(this.count);
          }
          else{
            this.numListOdd.push(this.count);
          }
        },
        1000);
  }
  stopInterval(){
    clearInterval(this.ref);
  }
}
