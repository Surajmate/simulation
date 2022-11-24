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
  avatar: any;
  url: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      if(localStorage.getItem('user_info')){
        var user_info : any = localStorage.getItem('user_info');
        this.user_info  = JSON.parse(user_info);
        this.username = this.user_info.result.userData.name;
        this.getinitials(this.username);
      }
    }, 1000);
    this.url = 'tutorials';
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  logout(){
    if (confirm("Wanna Logout?")){
     localStorage.clear();
     this.router.navigate(['signin']);
    }
  }

  getinitials(name: any){
    let brk_str: any[] = name.split(' ');
    let f_st: any =brk_str[0]
    let l_st: any = ''
    if(brk_str.length>1){
      l_st = brk_str[brk_str.length-1]
      l_st = l_st[0]
    }else{
      l_st = ''
    }
    this.avatar = f_st[0] + l_st
  }

}
