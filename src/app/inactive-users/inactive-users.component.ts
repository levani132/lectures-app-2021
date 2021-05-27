import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UsersManagementService} from '../users-management.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})

export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersManagementService: UsersManagementService ) { }

  ngOnInit(): void {
    this.users = this.usersManagementService.inactiveUsers;
  }

  changeStatus(id: number) {
    this.usersManagementService.onSetToActive(id);
  }

}

