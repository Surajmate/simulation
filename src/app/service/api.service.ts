import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: String = "http://localhost:3999/"
  header = {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token"),
  }
  no_token_header = {
    "Content-Type": "application/json",
  }

  constructor(private http: HttpClient, private router: Router) {}

  getdata() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    return this.http.get(this.url + "users/user_data", {
      'headers': headers
    });
  }

  login(data: any) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    return this.http.post(this.url + "users/login", data, {
      'headers': headers
    });
  }

  register(data: any) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    return this.http.post(this.url + "users/register", data, {
      'headers': headers
    });
  }

}
