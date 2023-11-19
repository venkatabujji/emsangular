import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = {
    userName:'',
    password:''
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  userLogin() {
    this.userService.Login(this.user).subscribe({
      next: (data) => {
        alert('you can proceed now.');
        this.router.navigate(['employee-list']);
      },
      error: (error) => {
        console.error('Login Error', error);
        alert('Invalid Username and Password (or)signup ');
      }
    });
  }


  Signup()
  {
    this.router.navigate(['Signup'])
  }
}
