import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {ClientManager} from '../client.manager.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  constructor(public clientManager: ClientManager) { }

  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.clientManager.onSetToInactive(id);
  }

}
