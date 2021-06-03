import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      ? { restrictedNameValidator: 'ამ სახელს ვერ გამოიყენებთ' }
      : null;
  }
/// async
static restrictedMailValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise(resolve => {
      resolve(control.value?.toLowerCase() === 'test@test.com'
      ? { restrictedMailValidator: 'ამ მეილის გამოყენება არ შეიძლება' }
      : null)
    });
  }

  }
