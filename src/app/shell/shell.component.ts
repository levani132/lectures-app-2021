import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent{

  username: string;
  isVisible = true;
  clickNums = []
  clickNum = 0;

  constructor() {
    this.clickNums.push(this.clickNum)
  }

  buttonClickAction(){

    this.isVisible = !this.isVisible; 

    this.clickNum = this.clickNum + 1;
    this.clickNums.push(this.clickNum)

  }

}
