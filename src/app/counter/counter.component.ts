import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../Service/Users.service';
import {User} from '../Service/user.model';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [UsersService]

})
export class CounterComponent implements OnInit {
  @Input() userIndex: number;
  counter: number;

  constructor(private Users: UsersService) {
  }

  ngOnInit(): void {
    this.counter = this.Users.getUserCount(this.userIndex);
  }

}
