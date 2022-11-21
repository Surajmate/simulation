import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  fullName: String = '';
  email: String = '';
  username: String = '';
  contact:Number = 0;
  address: String = '';
  con_password: String = '';
  password: String = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  register(){
    this.api.register({
      "name": this.fullName, //"Raj",
      "email": this.email, //"raj3@gmail.com",
      "username": this.username, //"Raj",
      "contact": this.contact, //"1231231231",
      "address": this.address, //"1231231231 esrhtrtg fdgbndfg ",
      "password": this.con_password, //"Raj@123",
  }).subscribe((obj: any)=>{
    if(obj.status == 200){
      this.router.navigate(['signin'])
    }else{

    }
  })
  }

}
