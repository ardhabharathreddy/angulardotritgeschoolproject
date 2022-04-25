import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-createteachers',
  templateUrl: './createteachers.component.html',
  styleUrls: ['./createteachers.component.css']
})
export class CreateteachersComponent implements OnInit {
  teacherForm:FormGroup=new FormGroup({
    createdAt:new FormControl(),
    name:new FormControl(),
    subject:new FormControl(),
    experience:new FormControl()
  })
  submit()
  {
    this.teacterService.postTeacher(this.teacherForm.value).subscribe(
      (data:any)=>{alert("Added Teacher")},
      (error:any)=>{alert("Failed to add teacher")}
    )
  }
  constructor(private teacterService:TeacherService) { }

  ngOnInit(): void {
  }

}
