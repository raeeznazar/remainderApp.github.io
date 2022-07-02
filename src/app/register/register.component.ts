import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  uname = '';
  username = '';
  password = '';
  heading = 'Your remainder App';

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]*')]],
    username: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
  });

  constructor(
    private ds: DataService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
  register() {
    var uname = this.registerForm.value.uname;
    var username = this.registerForm.value.username;
    var password = this.registerForm.value.password;

    if (this.registerForm.valid) {
      this.ds.register(uname, username, password).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid form');
    }
  }
}
