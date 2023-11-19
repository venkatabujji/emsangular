// employee-service.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8080/Employees";
  private baseURL4 = "http://localhost:8080/addEmployee";
  private baseURL2 = "http://localhost:8080/updateEmployee";
  private baseURL3 = "http://localhost:8080/deleteEmployee";

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL4}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee)
   {
    return this.httpClient.put(`${this.baseURL2}/${id}`, employee);
  }

  deleteEmployee(id: number)
   {
    return this.httpClient.delete<void>(`${this.baseURL3}/${id}`);
  }
}
