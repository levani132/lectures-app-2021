import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent  {
  username = '';
  text = '';
  smthng = "appear";
  counter = 0;
  
  myFun(){
    this.username = '';
  }
  rame(){
    if(this.text == ''){
      this.text = "გამაქრე";
      this.smthng = "hide";
    }
    else {
      this.text = '';
      this.smthng = "appear";
    }
    this.counter +=1;
    // if(this.counter > 5){

    // }

  }

  constructor() { }


}


