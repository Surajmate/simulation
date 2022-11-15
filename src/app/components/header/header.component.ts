import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: any;
  username: any = '';
  email: any = '';
  password: any = '';
  user_info: any = {};

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    var user_info : any = localStorage.getItem('user_info');
    this.user_info  = JSON.parse(user_info);
    this.username = this.user_info.result.userData.name;
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

  logout(){
    if (confirm("Wanna Logout?")){
     localStorage.clear();
     this.router.navigate(['signin']);
    }
  }

}
