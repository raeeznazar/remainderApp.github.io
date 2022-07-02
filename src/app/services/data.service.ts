import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';

const options = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // register API call
  register(uname: any, username: any, password: any) {
    // requestbody

    const data = {
      uname,
      username,
      password,
    };

    // register api
    return this.http.post('http://localhost:3001/register', data);
  }

  login(username: any, password: any) {
    const data = {
      username,
      password,
    };
    // register api
    return this.http.post('http://localhost:3001/login', data);
  }

  getOptions() {
    // To fetch token

    const token = JSON.parse(localStorage.getItem('token') || '');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.append('x-access-token', token);

      options.headers = headers;
    }
    return options;
  }

  // add api call
  add(username: any, password: any, date: any, eventText: any) {
    const data = {
      username,
      password,
      date,
      eventText,
    };
    //add api
    return this.http.post('http://localhost:3001/add', data, this.getOptions());
  }
}
