import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  num = 0;

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.num = +this.route.snapshot.queryParams.num || 0;
    this.route.queryParams.subscribe(({num})=>{
      this.num = +num || 0;
    });
  }

  increment(){
    this.num = this.num + 1;
  }

}
