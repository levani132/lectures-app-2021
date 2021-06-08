import {Component} from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  userName: string;
  isShow = false;
  count = 0;
  buttonText = 'გამომაჩინე';

  constructor() {
  }

  isEmpty(): boolean {
    return !this.userName;
  }

  cleanUserName() {
    this.userName = null;
  }

  onShowHIde() {
    this.isShow = !this.isShow;
    this.buttonText = this.isShow ? 'ჩამაქრე' : 'გამომაჩინე';
    this.count++;
  }
}
