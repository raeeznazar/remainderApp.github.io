import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  user = JSON.parse(localStorage.getItem('currentUser') || '');

  loginDate: any;
  del_currentUsername: any;

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {
    this.loginDate = new Date();
  }

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUsername');
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }

  add() {
    var date = this.eventForm.value.date;
    var eventText = this.eventForm.value.eventText;
    var username = this.eventForm.value.username;
    var password = this.eventForm.value.password;

    if (this.eventForm.valid) {
      this.ds.add(username, password, date, eventText).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    }
  }

  // delete from parent for deletebtn
  deleteFromParent() {
    this.del_currentUsername = JSON.parse(
      localStorage.getItem('currentUsername') || ''
    );
  }

  onDashCancel() {
    this.del_currentUsername = '';
  }
  onDashDelete(event: any) {
    this.ds.onDashDelete(event).subscribe(
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
  }
}
