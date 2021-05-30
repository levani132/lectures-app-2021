import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss'],
})
export class ActiveUsersComponent implements OnInit {

  constructor(private Active: UserService, private count: CounterService) {}

  activesList = this.Active.activeUsers;


  ngOnInit(): void {}

  changeStatus(id: number) {
    this.Active.onSetToInactive(id);
    this.count.counter();
  }
}
