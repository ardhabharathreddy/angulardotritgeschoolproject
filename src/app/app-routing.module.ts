import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardcComponent } from './dashboard/dashboardc/dashboardc.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CreatestudentsComponent } from './student/createstudents/createstudents.component';
import { StudentdetailsComponent } from './student/studentdetails/studentdetails.component';
import { StudentsComponent } from './student/students/students.component';
import { TeachersComponent } from './teacher/teachers/teachers.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboardc",component:DashboardcComponent,canActivate:[AuthGuard],children:[
    {path:"home",component:HomeComponent},
    {path:"createstudents",loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)},
    {path:"createteachers",loadChildren:()=>import('./teacher/teacher.module').then(m=>m.TeacherModule)},
    {path:"teachers",component:TeachersComponent},
    {path:"students",component:StudentsComponent},
    {path:"studentdetails/:id",component:StudentdetailsComponent},
    {path:"editstudent/:id",component:CreatestudentsComponent},
    {path:"",component:HomeComponent}
  ]},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
