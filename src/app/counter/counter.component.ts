import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  x = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
