import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['ლევანი', 'დიმა'];
  inactiveUsers = ['მარიამი', 'გიორგი'];

  constructor(private countService: CounterService) { } //private countService: CounterService
  
  onSetToInactive(id: number) {
    this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
    this.countService.increaseCounter();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
    this.countService.increaseCounter();
  }
}
