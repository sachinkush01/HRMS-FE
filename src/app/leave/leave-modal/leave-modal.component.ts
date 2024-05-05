import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'leave-modal',
  templateUrl: './leave-modal.component.html',
  styleUrls: ['./leave-modal.component.css'],
  providers: [LeaveService]
})
export class LeaveModalComponent implements OnInit {
  response: any;
  msg: string = "";
  closeResult = '';
  public diffDays: any;
  public from: string = "";
  public to: string = "";
  public dtErr: string = "";
  public message:string = "";
  public leaveType : any = [
    {"value":"sickLeave", "display" : "Sick Leave"},
    {"value":"vacation", "display" : "Vacation"},
    {"value":"covid", "display" : "Covid"},
    {"value":"other", "display" : "Other"},
  ]
  public selectLeaveType: string = "Leave type"
  todate: any;
  eMasterDetails: any;

  constructor(private leaveService: LeaveService, private authService: AuthenticationService) { }
  ngOnInit(): void {
    
  }

  sendRequest() {

    if(!this.diffDays || this.selectLeaveType === "Leave_type" || this.message === "") {
     alert("Please add all details");
     return;
    }
    
    var leaveReqDto:any = {
       'no_of_leave': this.diffDays,
       'leave_type' : this.selectLeaveType,
       'message': this.message,
       'from_date': this.from,
       'to_date': this.to,
       'emp_id': this.authService.getData(this.authService.TOKEN_KEY)
      };  
    
    this.leaveService.sendLeaveRequest(leaveReqDto).subscribe(resp => {
      console.log(resp);
      var code = resp.code;
      this.response = resp;
      console.log("code : " + code)
      window.location.reload();
      //alert(this.response.message)
    });
  }

  public dateDiff() {
    if(this.to && this.from) {
      let toDt = new Date(this.to);
      let frDt = new Date(this.from);
      this.diffDays = toDt.getDate() - frDt.getDate() + 1;
      this.dtErr = "";
    } else {
      this.dtErr = "Please select both the dates";
    }
  }

  public clear() {
    this.diffDays = "";
    this.from = "";
    this.to = "";
    this.dtErr = "";
    this.selectLeaveType = "Leave_Type";
    this.message = "";
  }
}

