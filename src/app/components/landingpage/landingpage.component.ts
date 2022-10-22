import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  name: any
  constructor(private api: ApiService){

  }
  ngOnInit(): void {
    // this.api.getdata().subscribe((data:any)=>{
    //   this.name =data.result.name
    // })
  }

}
