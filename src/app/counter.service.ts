import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  isItClicked = false;

  
  constructor() { }
  x = 0;
  counter (){
    this.isItClicked = true;
    this.x = this.x + 1;
    setTimeout(() => {
    this.isItClicked = false;
    }, 2000);
    
  }

}
