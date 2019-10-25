import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  jwt: string;
  username: string;
  roles = localStorage.getItem('roles');
 // tslint:disable-next-line: whitespace
 // tslint:disable-next-line: semicolon
 // tslint:disable-next-line: variable-name
 private _loginUrl = 'http://localhost:8000/login';

  // tslint:disable-next-line: variable-name
  constructor(private http: HttpClient, private  _router: Router)
   // tslint:disable-next-line: one-line
   { }

    onLogin(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    this._router.navigate(['auth']);
  }
  getToken() {
    return localStorage.getItem('token');
  }


}
