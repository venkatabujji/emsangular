import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})

export class UpdateDepartmentComponent implements OnInit
{
  id!:number;
  department:Department=new Department();

  constructor(private departmentService:DepartmentService,private router:Router,private route:ActivatedRoute)
  {}
  
        
   
    onSubmit() {
   
        
        this.departmentService.updateDepartment(this.department.dept_id, this.department).subscribe(
          data=>
           { alert("Sucessfully updated");
           this.router.navigate(['department-list'])
           },
           error => 
          {
             console.error(error);
          }
        );
      
    }
  ngOnInit(): void {
    if(this.id !== undefined)
    
    {
    this.departmentService.getDepartmentById(this.id).subscribe(data => {
      this.department= data;
    },
      error => console.log(error));
  }
  }
}