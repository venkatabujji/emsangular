
import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent 
{
  
  user: User =  new User();
  
  constructor(private userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
    saveUser()
    {
      this.userservice.createuser(this.user).subscribe((data: any)=>{ 
        console.log(data);
        alert("successfully Created");
        this.goToLogin();
        
      },
        (      error: any)=>
      {
        console.error('Error creating employee:', error);
        alert('Error while creating employee');
    })
    
  }
  goToLogin(){
    this.router.navigate(['/']);
  }
  onSubmit()
  {

    console.log(this.user);
    this.saveUser();
  }

}

 