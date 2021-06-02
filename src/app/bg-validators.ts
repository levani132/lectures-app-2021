import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class BgValidators extends Validators {

    // restrictedName = "Test"; // Test tolowercase is restricted as well

    static required(control: AbstractControl) : ValidationErrors | null {
        return super.required(control) ? {required: "ეს ველი აუცილებელია"} : undefined;
    }

    static email(control: AbstractControl) : ValidationErrors | null {
        return super.email(control) ? {email: "გთხოვთ შეიყვანოთ იმეილი სწორად"} : undefined;
    }

    // static restrictedProjectName(control: AbstractControl) : {[key: string]:any} | null {
    //     if (this.restrictedName.includes(control.value)) {
    //         return { restrictedName: "ამ სახელის გამოყენება შეზღუდულია"};
    //     }
    // }
}