import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: number;

  constructor(private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.counter = +this.router.snapshot.queryParams.counter || 0;
    this.router.queryParams.subscribe(params => {
      this.counter = +params.counter||0;
    } );
  }
  count() {
    this.route.navigate(['counter'], { queryParams: { counter: this.counter + 1 }});
  }
}
