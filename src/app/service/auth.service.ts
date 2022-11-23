import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getisLoggedIn(){
    console.log(localStorage.getItem('accessToken'));
    return this.getToken() ? true : false;
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }
}
