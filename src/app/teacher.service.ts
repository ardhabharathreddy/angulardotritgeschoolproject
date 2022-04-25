import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  getTeachers():Observable<any>{
    return this.httpClient.get("https://61fcc71d3f1e34001792c996.mockapi.io/api/v1/teachers");
  }
  postTeacher(value:any):Observable<any>{
    return this.httpClient.post("https://61fcc71d3f1e34001792c996.mockapi.io/api/v1/teachers",value);
  }
  constructor(private httpClient:HttpClient) { }
}
