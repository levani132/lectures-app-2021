import { Component } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent{
  username = '';
  disabled = false;
  paragraphToggle = true;
  paragraph = 'delete';
  paragraphArr = [];
  constructor() { }

  showParagraph() {
    this.paragraphToggle = !this.paragraphToggle;
    this.paragraphArr.push(this.paragraphArr.length);
  }
  inputValue(event) {
    const value = event.target.value;
    this.username = value;
  }
}
