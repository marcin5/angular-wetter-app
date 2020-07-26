import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromeRemote(this.user).subscribe(
      data => {
        console.log('response.recived');
        this.router.navigate(['/home']);
      },
      error => {
        console.log('exception');
        this.msg = 'Wrog email or password';
      }
    );
  }

}
