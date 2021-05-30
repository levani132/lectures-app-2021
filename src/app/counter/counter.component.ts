import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  // counter: number;

  changes: number;

  constructor(public counterServ: CounterService) { }

  ngOnInit(): void {
    // this.counter = this.counterServ.counter;
  }

  countChanges() {
    return this.changes = this.counterServ.counter;
  }

}
