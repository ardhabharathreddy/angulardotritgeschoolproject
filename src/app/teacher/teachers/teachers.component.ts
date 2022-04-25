import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers:any;
  constructor(private teachersService:TeacherService) {
    teachersService.getTeachers().subscribe(
      (data:any)=>{this.teachers=data},
      (error:any)=>{alert("internal server error")}
    )
   }

  ngOnInit(): void {
  }

}
