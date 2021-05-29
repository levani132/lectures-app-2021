import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;
  constructor(public router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.counter= +this.route.snapshot.queryParams.counter || 0;
    this.route.queryParams.subscribe(({counter}) => {
      this.counter = +counter || 0;
    });
  }
  raise(){
    this.counter++;

  }

}
