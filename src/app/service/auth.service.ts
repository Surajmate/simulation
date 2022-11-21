import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getisLoggedIn(){
    return (this.getToken() != null) ? true : false;
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
