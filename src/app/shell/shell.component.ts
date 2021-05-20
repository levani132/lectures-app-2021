import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  username = "";
  text = "გამაქრე";
  count = [];

  appear(){
    if(this.count.length >= 1){
      this.count[this.count.length] = ++this.count.length; //count[1] = 2;
    } else {
      this.count[this.count.length] = 1; //count[0] = 1
    }
    // this.count.push(this.count.length+1);

    if(this.text != ""){
      this.text = "";
    } else {
      this.text = "გამაქრე";
    }

    if(this.count.length >= 5){
      
    }
  }
  
  reset(){
    if(this.username!=""){
      this.username = "";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
