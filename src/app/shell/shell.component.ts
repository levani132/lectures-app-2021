import { typeSourceSpan } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  username:string = '';
  isParagraphVisible = true;
  numList = [];

  constructor() { }

  showBtnAction(){
    this.isParagraphVisible = !this.isParagraphVisible;
    this.numList.push(this.numList.length + 1);
  }
}