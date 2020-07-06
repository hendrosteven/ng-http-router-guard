import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.email==='hendro.steven@gmail.com'){
      if(this.password==='secret'){
        localStorage.setItem('token','apaajaboleh');
        this.router.navigate(['home']);
      }else{
        alert('Login fail');
      }
    }else{
      alert('Login fail');
    }
  }

}
