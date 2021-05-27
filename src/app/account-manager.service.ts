import { Injectable, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {
  activeUsers = ['ლევანი', 'დიმა'];
  inactiveUsers = ['მარიამი', 'გიორგი'];
  counter = [];

  constructor(private counterService: CounterService) {

  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
    this.counterService.addCounter();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
    this.counterService.addCounter();
  }
}
