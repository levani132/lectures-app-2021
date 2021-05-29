import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-error-alert',
  // templateUrl: './error-alert.component.html',
  // styleUrls: ['./error-alert.component.scss'],
  template: '<p>error-alert at your service sir!</p>',
  styles: [
          `p { 
            
              font-size: 30px; 
              color: brown; 
            
             }`
          ]
})
export class ErrorAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
