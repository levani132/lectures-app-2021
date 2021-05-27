import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  countStatic = 0;
  countDynamic = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (!!params.count) {
        this.countDynamic = +params.count;
      }
    });
  }

  onCounterStatic() {
    this.countStatic++;
  }


  onCounterDynamic() {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { count: this.countDynamic + 1 } });
  }

}
