import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-createstudents',
  templateUrl: './createstudents.component.html',
  styleUrls: ['./createstudents.component.css']
})
export class CreatestudentsComponent implements OnInit {
  studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      id:new FormControl(),
      age:new FormControl(),
      class:new FormControl(),
      section:new FormControl(),
      type:new FormControl(),
      address:new FormGroup({
        pin:new FormControl(),
        addressLine:new FormControl()
      }),
      percentage:new FormArray([
        new FormGroup({
          class:new FormControl(),
          percentage:new FormControl()
        })
      ]),
      

    }
  )
  queryParam:any=null;
  student:any={};
  get percentageFormArray(){
    return this.studentForm.get('percentage')as FormArray;
  }
  add(){
    this.percentageFormArray.push(new FormGroup({
      class:new FormControl(),
      percentage:new FormControl()
    }))
  }
  delet(i:any){
    this.percentageFormArray.removeAt(i);
  }
  submit(){
    if(this.queryParam!=null)
    {
      this.studentService.putStudent(this.studentForm.value).subscribe(
        (data:any)=>{alert("Edited")},
        (error:any)=>{alert("unable to edit")}
      )
    }
    else{
    this.studentService.postStudent(this.studentForm.value).subscribe(
      (data:any)=>{alert("Student posted successfully")},
      (error:any)=>{alert("Failed to push students")}
    )
    }
  }
  constructor(private studentService:StudentService,private activatedRoute:ActivatedRoute) {
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='residential'){
          this.studentForm.addControl("hostelFee",new FormControl());
          this.studentForm.removeControl("busFee");
          this.studentForm.removeControl("distanceFee");
        }
        else if(data=='dayScholar'){
          this.studentForm.addControl("busFee",new FormControl())
          this.studentForm.removeControl("hostelFee");
          this.studentForm.removeControl("distanceFee");
        }
        else{
          this.studentForm.addControl("distanceFee",new FormControl())
          this.studentForm.removeControl("hostelFee");
          this.studentForm.removeControl("busFee");
        }
      }
    )
    this.activatedRoute.params.subscribe(
      (data:any)=>{this.queryParam=data.id},
      (error:any)=>{alert("cannot get params")}
    )
    if(this.queryParam!=null){
      this.activatedRoute.params.subscribe(
        (data:any)=>{this.studentService.getStudentById(data.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
            
            this.student=data
                    
          },
          (error:any)=>{alert("Cannot edit Details")}
        )}
      ),
      (error:any)=>{alert("cannot get params in if ")}
    }
   }

  ngOnInit(): void {
  }

}
