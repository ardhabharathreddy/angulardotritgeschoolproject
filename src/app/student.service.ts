import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/students");
  }
  postStudent(value:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/students",value);
  }
  getStudentById(id:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/students"+"/"+id);
  }
  deletEmployee(id:any):Observable<any>
  {
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/students"+"/"+id);
  }
  constructor(private httpClient:HttpClient) { }
}
