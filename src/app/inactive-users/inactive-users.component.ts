import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersManagementService } from '../users-management.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(
    private usersManagementService: UsersManagementService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.users = this.usersManagementService.inactiveUsers;
  }

  changeStatus(id: number) {
    this.usersManagementService.onSetToActive(id);
    this.counterService.RaiseCounter();
    this.counterService.ShowCounter();
  }
}
