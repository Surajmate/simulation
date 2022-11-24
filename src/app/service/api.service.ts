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

  headers = new HttpHeaders().set(
    'Authorization', 'Bearer ' + localStorage.getItem("token")
  );

  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(this.url + "users/user_data", {
      'headers': this.headers
    });
  }

  login(data: any) {
    return this.http.post(this.url + "users/login", data, {
      'headers': this.headers
    });
  }

  register(data: any) {
    return this.http.post(this.url + "users/register", data, {
      'headers': this.headers
    });
  }

}
