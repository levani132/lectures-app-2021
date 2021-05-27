import { Component, OnInit} from '@angular/core';

import { AccountManagerService } from '../account-manager.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private accountManager: AccountManagerService) {

  }

  ngOnInit(): void {
    this.users = this.accountManager.activeUsers;
  }

  changeStatus(id: number) {
    this.accountManager.onSetToInactive(id);
  }
  
}
