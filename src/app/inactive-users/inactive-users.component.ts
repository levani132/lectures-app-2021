import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  @Output() userSetToActive = new EventEmitter<number>();

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  changeStatus(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
  }

}
