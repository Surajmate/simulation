import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  name: any;
  username: any = '';
  email: any = '';
  password: any = '';
  reg_name: any = '';
  reg_email: any = '';
  reg_username: any = '';
  reg_contact: any = '';
  reg_address: any = '';
  reg_password: any = '';
  
  constructor(private api: ApiService){

  }
  ngOnInit(): void {
    this.api.getdata().subscribe((data:any)=>{
      this.name = data.result.name
    })
  }

  login(){
    this.api.login({
      "email": this.email, //"c@c.com"
      "password": this.password //"Suraj@123"
    }).subscribe((obj: any)=>{
      if(obj.status == 200){
        localStorage.setItem('user_info',JSON.stringify(obj))
        this.email = ''
        this.password = ''
      }else{
        alert(obj.message)
      }
    })
  }

  register(){
    this.api.register({
      "name": "Raj",
      "email": "raj3@gmail.com",
      "username": "Raj",
      "contact": "1231231231",
      "address": "1231231231 esrhtrtg fdgbndfg ",
      "password": "Raj@123"
  }).subscribe((obj: any)=>{
    if(obj.status == 200){

    }else{

    }
  })
  }

}
