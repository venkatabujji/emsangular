import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateuserComponent } from './createuser/createuser.component';



const routes: Routes =
[
  {path:'Signup', component:CreateuserComponent},
  {path:'', component:UserLoginComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'department-list',component:DepartmentListComponent},
  {path:'create-department',component:CreateDepartmentComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'update-department/:id',component:UpdateDepartmentComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
 {




 }


