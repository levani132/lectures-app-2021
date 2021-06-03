import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { BgValidators } from './bg-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lectures-app';

  projectStatus = ["სტაბილური", "კრიტიკული", "დასრულებული"];

  restrictedName = "test"; // Test tolowercase is restricted as well
  // restrictedEmailName = ["test@test.com"];
  form: FormGroup;

  ngOnInit() {
    this.initForm();
  }  

  ourGet(path: string | (string | number)[]) {
    return this.form.get(path);
  }

  errors(path: string | (string | number)[]) {
    return this.ourGet(path)?.errors && Object.values(this.ourGet(path)?.errors);
  }

  restrictedProjectName(control: AbstractControl) : {[key: string]:any} | null {
    if (this.restrictedName == ((control.value).toLowerCase())) {
        return { restrictedName: "ამ სახელის გამოყენება შეზღუდულია"};
    }
  }

  // es afrens 

  // restrictedEmailValidator(control: AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //   return new Promise(resolve => {
  //     setTimeout(()=>{
  //       return this.restrictedEmailName.includes(control.value) ? 
  //               resolve({restrictedEmailName: "ამ იმეილის გამოყენება არ შეიძლება"}) : resolve(null);
  //     },2000);
  //   });
  // }

  initForm() {
    this.form = new FormGroup({
      projectName: new FormControl('', [BgValidators.required, this.restrictedProjectName.bind(this)]),
      projectEmail: new FormControl('', [BgValidators.required, BgValidators.email, BgValidators.restrictedEmailName]),
      projectStatus: new FormControl('')
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form);
  }
}
