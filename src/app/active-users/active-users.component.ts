import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UsersManagementService} from '../users-management.service';
import{ CounterService } from '\../counter.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})

export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersManagementService: UsersManagementService, private counterService : CounterService  ) { }

  ngOnInit(): void {
    this.users = this.usersManagementService.activeUsers;
  }

  changeStatus(id: number) {
    this.usersManagementService.onSetToInactive(id);
    this.counterService.RaiseCounter();
    this.counterService.ShowCounter();
  }

}
