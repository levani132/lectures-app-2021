import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BGValidators } from './bg-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lectures-app';
  form: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      projectName: new FormControl('', [
        BGValidators.required,
        BGValidators.restrictedNameValidator,
      ]),
      mail: new FormControl('', [
        BGValidators.email,
        BGValidators.required,
      ],
      BGValidators.restrictedMailValidator),
      status: new FormControl(''),
    });
  }

  onSubmit() {
    if (document.querySelector('form').classList.contains('ng-valid')) {
      console.log(this.form.value);
    }
  }
}
