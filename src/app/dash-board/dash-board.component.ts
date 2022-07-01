import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  eventForm = this.fb.group({
    date: ['', [Validators.required]],
    eventText: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  add() {
    var date = this.eventForm.value.date;
    var eventText = this.eventForm.value.eventText;
    var username = this.eventForm.value.username;
    var password = this.eventForm.value.password;

    if (this.eventForm.valid) {
    }
  }
}
