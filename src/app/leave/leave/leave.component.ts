import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'leave-component',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  providers: [LeaveService]
})
export class LeaveComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}

