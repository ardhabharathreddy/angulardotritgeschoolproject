import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateteachersComponent } from './createteachers/createteachers.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path:"",component:CreateteachersComponent},
  {path:"",component:TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
