import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/auth.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.loggedIn = !!user?.token;
    });
  }
  logOut() {
    this.authService.logOut();
  }
}
