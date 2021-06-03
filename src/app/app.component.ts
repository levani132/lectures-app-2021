import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BGValidators } from './bg-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lectures-app';
  form: FormGroup;

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      projectName: new FormControl('', [
        BGValidators.required,
        BGValidators.nameRestrictionValidator,
      ]),
      mail: new FormControl('', [
        BGValidators.required,
        BGValidators.email,
        BGValidators.emailRestrictionValidator,
      ]),
      status: new FormControl(''),
    });
  }

  onSubtmit() {
    console.log(this.form.value);
  }
}
