import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Department } from './department';


@Injectable({
  providedIn: 'root'
})

export class DepartmentService 
{

  private baseUrl="http://localhost:8080/Departments";
  private baseUrl3="http://localhost:8080/addDepartment";
  private baseUrl4="http://localhost:8080/updateDepartment";
  private baseUrl2="http://localhost:8080/deleteDepartment";

  constructor(private httpClient:HttpClient)
  {


  }


  getDepartmentsList(): Observable<Department[]>
  {
     return this.httpClient.get<Department[]>(`${this.baseUrl}`);
  }


  createDepartment(department:Department)
  {
    return this.httpClient.post(`${this.baseUrl3}`,department);
  }


  getDepartmentById(id:number) :Observable<Department>
  {
     return this.httpClient.get<Department>(`${this.baseUrl}/${id}`);
  }
 


  updateDepartment(id:number,department:Department):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl4}/${id}`,department);
  }


  deleteDepartment(id:number)
  {
    return this.httpClient.delete(`${this.baseUrl2}/${id}`);
  }
 
}

 