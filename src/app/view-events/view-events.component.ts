import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css'],
})
export class ViewEventsComponent implements OnInit {
  user: any;
  username: any;
  viewEvents: any;
  userUname: any;

  constructor(private ds: DataService) {
    //// for user appear in viewEvent page
    this.user = JSON.parse(localStorage.getItem('currentUser') || '');
    //// for user event details
    this.username = JSON.parse(localStorage.getItem('currentUsername') || '');

    this.ds.viewEvent(this.username).subscribe(
      (result: any) => {
        if (result) {
          this.viewEvents = result.viewEvents;
          this.userUname = result.name;

          alert(result.message);
        }
      },
      (result) => {
        alert(result.error.message);
      }
    );
  }

  ngOnInit(): void {}
}
