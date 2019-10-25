import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


interface IUser {
  username: string;
  password: string;
  roles: [];
}


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _auth: AuthService,
              // tslint:disable-next-line: variable-name
              private _router: Router) { }
  helper = new JwtHelperService();



  // Pour la fonction FormGroup
  f = new FormGroup({
    username : new FormControl('', [ Validators.required, Validators.minLength(3)]),
    password : new FormControl('', Validators.required)
  // tslint:disable-next-line: semicolon
  })

  ngOnInit() {
  }

  onLogin(a) {
  console.log(a);
  // tslint:disable-next-line: comment-format
  //console.log(this.loginUserData)
   // tslint:disable-next-line: align
   this._auth.onLogin(this.f.value)
   .subscribe(
     res => {
       console.log(res);
       // tslint:disable-next-line: whitespace
       const token=res.token;
       localStorage.setItem('token', res.token);
       const decodedToken = this.helper.decodeToken(token);
       console.log(decodedToken);
       localStorage.setItem('username', decodedToken.username);
       localStorage.setItem('roles', decodedToken.roles[0]);
       localStorage.setItem('expiration', decodedToken.exp);
       console.log(localStorage);

       this._router.navigate(['menu/home']);
      },

       err => {
         console.log(this.f.value);
         console.log(err);
        } );
}


}

