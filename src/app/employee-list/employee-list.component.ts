import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeesList().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
      }
    });
  }
  updateEmployee(id:number)
  {
      this.router.navigate(['update-employee',id]);
  }


  deleteEmployee(id:number)
  {

     this.employeeService.deleteEmployee(id).subscribe(data=>{
      alert("successfully deleted");
      this.getEmployees();})
  }

  LogOut()
  {
    this.router.navigate(['/']);
  }



}
  
