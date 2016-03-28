import { Injectable } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';

interface IAuthToken {
  token: string;
}

@Injectable()
export class AuthService {
  token: IAuthToken;

  constructor(private http: Http) { }

  auth(username: string, password: string): void {
    let body = JSON.stringify({ username: username, password: password });
    console.log(body);
    this.http.post('http://localhost:8080/auth', body)
      .map(res => res.json())
      .subscribe(res => {
        this.token = res.token;
      });
  }
}
