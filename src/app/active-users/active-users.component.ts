import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../Service/user.model';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {
  @Input() user: User;


  changeStatus() {
    this.user.status = 'C';
  }

}
