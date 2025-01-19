import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true, 
  imports: [FormsModule,CommonModule],
  templateUrl:'./login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  login(){
    alert("Login Successfully!");
  }
}
