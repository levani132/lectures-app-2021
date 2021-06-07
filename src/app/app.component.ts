import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/auth.service';
import { UserModel } from './shared/user.mode';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: Subscription;
  isLogged = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.user = this.auth.user.subscribe(
      res => {
        this.check(res);
      }
    );
  }

  ngOnDestroy() {
    this.user.unsubscribe();
  }

  check(res: UserModel) {
    this.isLogged = !!res.token;
  }
}
