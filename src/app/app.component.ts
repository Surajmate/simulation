import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simulation';
name: any
  constructor(private api: ApiService){

  }
  ngOnInit(): void {
    this.api.getdata().subscribe((data:any)=>{
      this.name =data.result.name
    })
  }
}
