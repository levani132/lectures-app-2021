import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { FifthService } from './fifth/fifth.service';

@Injectable({
  providedIn: 'root'
})
export class FifthResolverService implements Resolve<string[]>{

  constructor(private fifthService: FifthService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<string[]> | Promise<string[]> | string[] {
    return this.fifthService.getPeople();
  }
}
