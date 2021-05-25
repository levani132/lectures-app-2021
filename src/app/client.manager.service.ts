import { Injectable } from "@angular/core";

import { Counter } from "./counter.service";

@Injectable({
    providedIn:'root'
})
export class ClientManager {
    activeUsers = ['ლევანი', 'დიმა'];
    inactiveUsers = ['მარიამი', 'გიორგი'];
    
    constructor(private counter:Counter) {}

    onSetToInactive(id: number) {
      this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
      this.counter.increase();
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
      this.counter.increase();
    }
}
