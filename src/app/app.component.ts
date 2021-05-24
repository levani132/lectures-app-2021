import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lectures-app';

  evenNumbers: number[] = [];
  oddNumbers:  number[] = [];

  ngOnInit() {
  }

  catchNumbers(emittedNum: number) {
    if(emittedNum % 2)
      this.oddNumbers.push(emittedNum);
    else
      this.evenNumbers.push(emittedNum);
  }
}
