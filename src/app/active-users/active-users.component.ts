import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  changeStatus(id: number) {
    this.usersService.onSetToInactive(id);
    this.counterService.increase();
  }

}
