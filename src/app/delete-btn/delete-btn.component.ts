import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.css'],
})
export class DeleteBtnComponent implements OnInit {
  @Input() currentUsername: string | undefined;
  @Output() DelPageTscancel = new EventEmitter();
  @Output() DelPageTsdelete = new EventEmitter();

  constructor(private ds: DataService) {}

  ngOnInit(): void {}

  DelHtmlpagecancel() {
    this.DelPageTscancel.emit();
  }

  DelHtmlpagedelete() {
    this.DelPageTsdelete.emit(this.currentUsername);
  }

  
}
