import {Component, Injectable, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {CounterService} from '../counter.service';

@Injectable()
@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private userService: UserService, public counterService: CounterService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  changeStatus(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.addCount();
  }

}
