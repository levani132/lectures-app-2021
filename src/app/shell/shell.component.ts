import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  username = "";
  count = [];
  text = "გამაქრე";
  dissappear(){
    if(this.count.length >= 1){
      this.count[this.count.length] = ++this.count.length;
    }else{
      this.count[this.count.length] = 1;
    }
    if (this.text != ""){
      this.text = "";
    }else{
      this.text = "გამაქრე";
    }
  }
  delete(){
    if(this.username!= ""){
      this.username="";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
