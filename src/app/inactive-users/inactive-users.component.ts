import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ClientManager } from '../client.manager.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {

  constructor(public clientManager: ClientManager) { }

  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.clientManager.onSetToActive(id);
  }

}
