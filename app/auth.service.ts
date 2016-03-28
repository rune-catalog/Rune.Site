import { Injectable } from 'angular2/core';
import { Http, Request, HTTP_PROVIDERS, RequestOptions, Headers } from 'angular2/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

interface IAuthToken {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  auth(username: string, password: string): Observable<string> {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    let opts = new RequestOptions({ headers: headers });

    let body = JSON.stringify({ username: username, password: password });
    return this.http.post('http://localhost:8080/auth', body, opts)
      .map(res => res.json())
      .map(json => json.token);
  }
}
