import {Component, OnInit} from '@angular/core';
import {UsersService} from './Service/Users.service';
import {User} from './Service/user.model';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent implements OnInit{

  users: User[];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
