import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatestudentsComponent } from './createstudents/createstudents.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"",component:CreatestudentsComponent},
  {path:"",component:StudentsComponent},
  {path:"",component:StudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
