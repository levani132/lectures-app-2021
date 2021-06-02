import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
  static checkProjectName(control: FormControl): {[key: string]: boolean} {
    if (['test' , 'Test', 'TEST'].includes(control.value)) {
      return {checkProjectName: true};
    }
    return null;
 }

 static checkAsyncEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({checkAsyncEmail: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
 }
}
