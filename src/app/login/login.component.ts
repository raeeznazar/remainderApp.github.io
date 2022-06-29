import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  heading = 'Your remainder App';

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
  });

  constructor(private fb: FormBuilder, private ds: DataService) {}

  ngOnInit(): void {}

  login() {
    var username = this.loginForm.value.username;
    var password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      
    }
  }
}
