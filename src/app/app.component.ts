import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn = false;
  userSubs: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSubs = this.authService.user.subscribe(user => {
      this.loggedIn = !!user?.token
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.userSubs) {
      this.userSubs.unsubscribe();
    }
  }
}
