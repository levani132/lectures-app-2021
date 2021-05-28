import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FifthService } from './fifth.service';

@Component({
  selector: 'bg-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {
  people: string[];

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.people = this.route.snapshot.data.people;
    this.route.data.subscribe(( { people }) =>{
      this.people = people;
  });
  }

}
