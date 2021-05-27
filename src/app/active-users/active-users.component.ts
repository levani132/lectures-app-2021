import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  changeStatus(id: number) {
    // this.userSetToInactive.emit(id);
    this.userService.onSetToInactive(id);
  }

}
