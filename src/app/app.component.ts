import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SeminarService } from './seminar.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showCongratulations = false;

  constructor(private seminarService: SeminarService) {}
  
  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.
    function timeout(time: number) {
      return new Observable<number>((observer: Observer<number>) => {
        setTimeout(() => {
          observer.next(time);
        }, time);
      });
    }
    const subs = timeout(500).pipe(map((value,index) => 'dato ' + value + ' dato'));
    subs.subscribe(value => console.log(value));
  }
}
