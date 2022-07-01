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
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  add() {
    var date = this.eventForm.value.date;
    var eventText = this.eventForm.value.eventText;

    if (this.eventForm.valid) {
    }
  }
}
