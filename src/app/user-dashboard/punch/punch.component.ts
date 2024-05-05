import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {punchIn } from 'src/app/class/punchIn.class';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { LeaveService } from 'src/app/service/leave.service';
import { PunchService } from 'src/app/service/punch.service';


@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
export class PunchComponent implements OnInit {
  authService: any;


  constructor(private punchService: PunchService ,private AuthenticationService: AuthenticationService, private leaveService: LeaveService) {
  }

  punchInTime: any;
  punchOutTime: any;
  punchInClass: punchIn | null = null;
  todayAttendance: Array<punchIn | null> = [];
  empId!: string;
  totalLeaves: number = 0;
  leavesLeft: number = 0;
  ngOnInit(): void {
    this.empId =this.AuthenticationService.getData(this.AuthenticationService.TOKEN_KEY);
    this.getTodayAttendance();
    this.getLeaveDetails();
  }

  punchINandOut(isPunchIn: boolean) {
    
    if (isPunchIn) {
      this.punchInClass = new punchIn();
      this.punchInTime = new Date();
      this.punchInClass.empId =  this.empId ;
      this.punchInClass.punchIn = new Date();
      this.punchInClass.createdOn = new Date();
      this.punchInTime = new Date();
      this.savePunchInPunchOut(this.punchInClass);
    } else {
      if(this.punchInClass != null) {
        this.punchOutTime = new Date();
        this.punchInClass.punchOut = new Date();
        this.punchInClass.udatedOn = new Date();
        console.log("in punch out condition:: " + this.punchInClass.punchOut);
        this.savePunchInPunchOut(this.punchInClass);
      } else {
        alert("Puch out with punch in is not allowed");
      }
    }
  }

  public dateDiffInDay(inTime: Date, outTime: Date): number {   
    let diff = outTime.getTime() -  inTime.getTime();
    return diff / (1000 * 3600 * 24);
  }

  savePunchInPunchOut(punchInOut: punchIn) {
    this.punchService.punchInOut(punchInOut).subscribe(resp => {
      this.getTodayAttendance();
    });
  }

  getTodayAttendance() {
    this.punchService.getTodayAttendance(this.empId).subscribe(resp => {
      console.log(resp.data);
      if (resp.data && resp.code == 200) {
        this.punchInClass = resp.data;
      } else if(resp.code == 204) {
        this.punchInClass = null;
      }
    });
  }

  getLeaveDetails() {
    this.leaveService.getLeaveDetails(this.empId).subscribe(resp => {
      console.log(resp.data);
      if (resp.data && resp.code == 200) {
        this.totalLeaves = resp.data.totalLeaves;
        this.leavesLeft = resp.data.leavesLeft
      } else if(resp.code == 204) {
        this.punchInClass = null;
      }
    });
  }
}
