import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit
{
 departments:Department[]=[];


 constructor(private departmentService : DepartmentService,private router:Router)
 {}
    
 ngOnInit():void
 {
   this.getDepartments();
 }


 private getDepartments()
 {
   this.departmentService.getDepartmentsList().subscribe(data=>
     {
       this.departments=data;
     });
 }

 updateDepartment(id:number)
 {
     this.router.navigate(['update-department',id]);
 }


 deleteDepartment(id:number)
 {
    this.departmentService.deleteDepartment(id).subscribe(data=>{
      alert("successfully deleted");
      this.getDepartments();})
 }
 
 LogOut()
{
  this.router.navigate(['/']);
}
}
