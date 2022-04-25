import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any;
  view(id:any){
    this.router.navigateByUrl("/dashboardc/createstudents/studentdetails"+"/"+id)
  }
  edit(id:any){
    this.router.navigateByUrl("/dashboardc/createstudents/editstudent"+"/"+id)
  }
  delet(id:any){
    this.studentService.deletEmployee(id).subscribe(
      (data:any)=>{this.studentService.getStudents().subscribe(
        (data:any)=>{this.students=data},
        (error:any)=>{alert("Internal server error cannot delet")}
      )},
      (error:any)=>{alert("Unable to delet")}
    )
  }
  constructor(private studentService:StudentService,private router:Router) {
    studentService.getStudents().subscribe(
      (data:any)=>{this.students=data},
      (error:any)=>{alert("Internal server error")}
    )
   }

  ngOnInit(): void {
  }

}
