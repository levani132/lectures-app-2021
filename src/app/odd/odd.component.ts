import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bg-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  @Input()  odd: number = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.odd, 'from odds components');
  }

}
