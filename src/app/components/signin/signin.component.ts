import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  name: any;
  username: any = '';
  email: any = '';
  password: any = '';

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('accessToken')){
      this.router.navigate(['home']);
    }else{
      localStorage.clear();
    }
  }

  login(){
    this.api.login({
      "email": this.email, //"c@c.com"
      "password": this.password //"Suraj@123"
    }).subscribe((obj: any)=>{
      if(obj.status == 200){
        localStorage.setItem('accessToken', obj.result.accessToken)
        localStorage.setItem('user_info',JSON.stringify(obj))
        this.email = ''
        this.password = ''
        this.router.navigate(['home']);
      }else{
        alert(obj.message)
      }
    })
  }

}
