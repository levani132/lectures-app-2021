import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Validators } from 'src/app/shared/validators';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  onLogin() {
    this.authService.login(this.get('username').value,
                           this.get('password').value)
        .subscribe(res => null);
  }

  get(controlName) {
    return this.form.get(controlName);
  }

  errors(controlName) {
    return this.get(controlName)?.errors ? Object.values(this.get(controlName).errors) : [];
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^\S*$/, 'სფეისების გარეშე'),
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])
    });
  }

}
