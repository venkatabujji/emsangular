import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
 
})
export class CreateEmployeeComponent implements OnInit
 {
  [x: string]: any;
  employees: Employee = new Employee();
  

  constructor(private employeeservice:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
  }
    saveEmployee()
    {
      this.employeeservice.createEmployee(this.employees).subscribe(data=>{ 
        console.log(data);
        alert("successfully Created");
        this.goToEmployeelist();
        
      },
      error=>
      {
        console.error('Error creating employee:', error);
        alert('Error while creating employee');
    })
    
  }
  goToEmployeelist(){
    this.router.navigate(['/employee-list']);
  }
  onSubmit()
  {

    console.log(this.employees);
    this.saveEmployee();
  }

  LogOut()
{
  this.router.navigate(['/']);
}
}

