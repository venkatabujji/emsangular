import { Component,OnInit } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee-service.service';
import { Employee } from '../employee';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';




@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent  implements OnInit
{
  id: number | undefined;
  employees:Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) { }
    
    onSubmit() {
        
        this.employeeService.updateEmployee(this.employees.emp_id, this.employees).subscribe(
          data => {
            alert("Successfully updated");
          },
          error => {
            console.error(error);
          }
        );
      
    }
  ngOnInit(): void {
    if(this.id !== undefined)
    
    {

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employees= data;
    },
      error => console.log(error));
  }
  }

}