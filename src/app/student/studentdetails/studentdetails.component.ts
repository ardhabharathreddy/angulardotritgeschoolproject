import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  student:any={};
  constructor(private activatedRoute:ActivatedRoute,private studentService:StudentService,private router:Router) {
    this.activatedRoute.params.subscribe(
      (data:any)=>{this.studentService.getStudentById(data.id).subscribe(
        (data:any)=>{this.student=data},
        (error:any)=>{alert("Cannot get data from service")}
      )},
      (error:any)=>{alert("cannot get query parameters")}
    )
   }
  prev(id:any){
    this.router.navigateByUrl("/dashboardc/studentdetails/"+(parseInt(id)-1))
  }
  next(id:any){
    this.router.navigateByUrl("/dashboardc/studentdetails/"+(parseInt(id)+1))
  }
  ngOnInit(): void {
  }

}
