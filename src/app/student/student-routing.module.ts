import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatestudentsComponent } from './createstudents/createstudents.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"",component:CreatestudentsComponent},
  {path:"students",component:StudentsComponent},
  {path:"studentdetails/:id",component:StudentdetailsComponent},
  {path:"editstudent/:id",component:CreatestudentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
