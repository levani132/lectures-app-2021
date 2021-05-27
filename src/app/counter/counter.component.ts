import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number[];

  constructor(public counterService: CounterService) {

  }

  ngOnInit(): void {
    this.counter = this.counterService.counter;
  }

}
