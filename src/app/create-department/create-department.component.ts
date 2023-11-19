import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})



export class CreateDepartmentComponent implements OnInit
{
 [x: string]: any;

 department:Department=new Department();




 constructor(private departmentService : DepartmentService,private router:Router)
 {}
 ngOnInit():void
 {


 }


 saveDepartment()
 {
   this.departmentService.createDepartment(this.department).subscribe(data=>
    {
      console.log(data); 
      alert("successfully Created");
      this.goToDepartmentList()
    },
    error=>
    {console.error('Error creating department:', error);
    alert('Error while creating employee');
})
 }
 goToDepartmentList()
 {
   this.router.navigate(['/department-list']);
 }

 onSubmit()
 {
  console.log(this.department);
    this.saveDepartment();

  }
 
LogOut()
{
  this.router.navigate(['/']);
}

}