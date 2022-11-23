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
}
