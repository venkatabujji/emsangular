import { Injectable } from '@angular/core';
import  { User } from './user';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({ providedIn: 'root' })

export class UserService
 {
 
private baseUrl="http://localhost:8080/login";
private baseUrl2="http://localhost:8080/addusers";
 

 constructor(private http:HttpClient)
  {
 
  }

 
  Login(user: User) {
    return this.http.post<any>(`${this.baseUrl}`, user).pipe(
      catchError((error) => {
        console.error('Error in login:', error);
        throw error; // rethrow the error after logging
      })
    );

  
  }


 createuser(User : User)
  {
      return this.http.post(`${this.baseUrl2}`, User);
    }

  }