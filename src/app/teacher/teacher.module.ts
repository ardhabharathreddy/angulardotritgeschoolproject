import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { CreateteachersComponent } from './createteachers/createteachers.component';
import { TaecherdetailsComponent } from './taecherdetails/taecherdetails.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateteachersComponent,
    TaecherdetailsComponent,
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
