import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';

import { BGValidators } from './bg-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['ქალი', 'კაცი', 'სხვა'];
  signupForm: FormGroup;
  forbiddenNames = ['მარიამი', 'დიმიტრი'];

  ngOnInit() {
    this.initForm();
    this.signupForm.valueChanges.subscribe(console.log);
    this.signupForm.statusChanges.subscribe(console.log);
    this.signupForm.setValue({
      userData: {
        username: 'levani',
        email: 'levanberoshvili@bog.ge'
      },
      gender: 'male',
      hobbies: []
    });
    this.signupForm.patchValue({
      userData: {
        username: 'levani132'
      }
    });
  }

  onAddHobby() {
    (this.get('hobbies') as FormArray).push(new FormControl(undefined, BGValidators.required));
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  getHobbiesControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNamesValidator(control: FormControl): { [key: string]: any } {
    if (this.forbiddenNames.includes(control.value)) {
      return { nameIsForbidden: 'ამ სახელის გამოყენება აკრძალულია' };
    }
  }

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.signupForm.get(controlName);
  }

  initForm() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(undefined, [BGValidators.required, this.forbiddenNamesValidator.bind(this)]),
        email: new FormControl(undefined, [BGValidators.required, BGValidators.email], BGValidators.forbiddenEmails)
      }),
      gender: new FormControl('კაცი'),
      hobbies: new FormArray([])
    });
  }
}
