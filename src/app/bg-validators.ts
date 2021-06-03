import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class BgValidators extends Validators {

    // restrictedEmail= "test@test.com";
 
    // restrictedName = "Test"; 

    static required(control: AbstractControl) : ValidationErrors | null {
        return super.required(control) ? {required: "ეს ველი აუცილებელია"} : undefined;
    }

    static email(control: AbstractControl) : ValidationErrors | null {
        return super.email(control) ? {email: "გთხოვთ შეიყვანოთ იმეილი სწორად"} : undefined;
    }

    static restrictedEmailName(control: AbstractControl) : {[key: string]:any} | null {
        if (control.value == "test@test.com") {
            return { restrictedEmail: "ამ იმეილის გამოყენება შეზღუდულია"};
        }
    }
}