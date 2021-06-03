import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class BGValidators extends Validators {
  static nameRestrictionValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    return control.value.toLowerCase() === 'test'
      ? { nameRestriction: 'ამ სახელის გამოყენება არ შეიძლება' }
      : null;
  }

  static emailRestrictionValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    return control.value === 'test@test.com'
      ? { emailRestriction: 'ამ მეილის გამოყენება არ შეიძლება' }
      : null;
  }
}
