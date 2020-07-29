import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUser(this.user).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        this.msg = error.error;
      }
    );
  }

}
