import { Component, OnInit} from '@angular/core';

import { AccountManagerService } from '../account-manager.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private accountManager: AccountManagerService) {

  }

  ngOnInit(): void {
    this.users = this.accountManager.inactiveUsers
  }

  changeStatus(id: number) {
    this.accountManager.onSetToActive(id);
  }

}
