import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  changeStatus(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.increase();
  }

}
