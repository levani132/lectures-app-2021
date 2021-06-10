import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../Service/user.model';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent {
  @Input() user: User;

  changeStatus() {
    this.user.status = 'A';
  }

}
