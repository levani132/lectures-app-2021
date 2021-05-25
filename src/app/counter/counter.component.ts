import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter.service';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(public counter: Counter) { }

  ngOnInit(): void {
  }

}
