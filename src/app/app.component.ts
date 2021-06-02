import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BGValidators } from './bg-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lectures-app';
  formGroup: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      titleName: new FormControl('',[BGValidators.required,BGValidators.checkForTest]),
      mail: new FormControl('',[BGValidators.required,BGValidators.email],[BGValidators.checkForTestMail]),
      status: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }
}
