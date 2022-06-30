import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  heading = 'Your remainder App';

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    username: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  register() {
    var name = this.registerForm.value.name;
    var username = this.registerForm.value.username;
    var password = this.registerForm.value.password;

    if (this.registerForm.valid) {
    }
  }
}
