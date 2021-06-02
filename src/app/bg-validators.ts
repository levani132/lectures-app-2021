import { AbstractControl, Validators } from "@angular/forms";

export class BGValidators extends Validators {

    static checkForTest(control: AbstractControl): { [key: string]: any } {
        if(control.value && control.value?.toLowerCase() === 'test') {
            return { checkForTest: 'გადაარქვი' };
        }
    }

    static checkForTestMail(control: AbstractControl): Promise<{ [key: string]: any }> {
        return new Promise(
            resolve => {
                setTimeout(() => {
                    if(control.value && control.value?.toLowerCase() === 'test@test.com') {
                        return resolve({ checkForTestMail: 'გადაარქვი სირცხვილია' });
                    }
                    return resolve(null);
                }, 3000)
            } 
        )
    }
}
