import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  heading = 'Your remainder App';
registerForm = this.fb.group({
  
})


  constructor(private fb: FormBuilder) {}



  ngOnInit(): void {}
}
