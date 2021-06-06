import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponseModel } from './auth-response.model';
import { LoaderService } from './loader/loader.service';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {UserModel} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Subject<UserModel> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private loaderService: LoaderService ) {}

  saveUser = (authResponse: AuthResponseModel) => {
    this.user.next(new UserModel(
      authResponse.name,
      authResponse.username,
      authResponse.image,
      authResponse.token,
      new Date(authResponse.expirationDate)
    ));
  }

  register(name, username, password) {
    return this.http.post<AuthResponseModel>('register', {
      name, username, password
    }).pipe(
      this.loaderService.useLoader,
      catchError(err => throwError(err.error)),
      tap(this.saveUser)
    );
  }

  login(username, password) {
    return this.http.post<AuthResponseModel>('login', {
      username, password
    }).pipe(
      this.loaderService.useLoader,
      catchError(err => throwError(err.error)),
      tap(this.saveUser)
    );
  }

  logOut() {
    this.user.next(null);
  }
}
