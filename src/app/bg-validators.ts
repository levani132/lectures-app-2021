import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { promise } from 'selenium-webdriver';

export class BGValidators extends Validators {
  static required(control: AbstractControl): ValidationErrors | null {
    return super.required(control) && { required: 'ეს ველი აუცილებელია' };
  }

  static email(control: AbstractControl): ValidationErrors | null {
    return super.email(control) && { required: 'გთხოვთ შეიყვანოთ სწორი მეილი' };
  }

  static restrictedNameValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    return control.value?.toLowerCase() === 'test'
      ? { required: 'ამ სახელს ვერ გამოიყენებთ' }
      : null;
  }

  static restrictedMailValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    return control.value?.toLowerCase() === 'test@test.com'
      ? { required: 'ამ მეილის გამოყენება არ შეიძლება' }
      : null;
  }
}
