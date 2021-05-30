import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  constructor(private inactive: UserService, private count: CounterService) { }

    inactiveList = this.inactive.inactiveUsers
  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.inactive.onSetToActive(id)
    this.count.counter()
  }

}
