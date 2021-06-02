import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lectures-app';
  selects = ['სტაბილური', 'კრიტიკული', 'დასრულებული'];
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      projectName: new FormControl(undefined, [
        Validators.required,
        MyValidators.checkProjectName
      ]),
      email: new FormControl(undefined, [
        Validators.email,
        Validators.required
      ], [
        MyValidators.checkAsyncEmail
      ]),
      selectGroup: new FormGroup({
        selectItem: new FormControl(undefined, [
          Validators.required
        ])
      })
    });
  }

  onSubmit() {
    console.log('form', this.form);
    console.log('formData', this.form.value);
  }
}
