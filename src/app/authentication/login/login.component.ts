import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl()
    }
  )
  signin(){
    this.loginService.postLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        localStorage.setItem("MyAppToken",data.token)
        this.router.navigateByUrl("/dashboardc");
      },
      (error:any)=>{alert("login Failed")}
    )
  }
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

}
