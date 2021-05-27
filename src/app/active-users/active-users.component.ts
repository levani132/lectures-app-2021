import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UsersManagementService} from '../users-management.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})

export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersManagementService: UsersManagementService ) { }

  ngOnInit(): void {
    this.users = this.usersManagementService.activeUsers;
  }

  changeStatus(id: number) {
    this.usersManagementService.onSetToInactive(id);
  }

}
