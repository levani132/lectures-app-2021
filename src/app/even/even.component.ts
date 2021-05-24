import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bg-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {
  @Input() even: number = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.even, 'from odds components');
  }

}
