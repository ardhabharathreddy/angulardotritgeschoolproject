import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenInterceptor } from '../token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  postLogin(value:any):Observable<any>{
    return this.httpClient.post("https://reqres.in/api/login",value);
  }
  constructor(private httpClient:HttpClient) { }
}
