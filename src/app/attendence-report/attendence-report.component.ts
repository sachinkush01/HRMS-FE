import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { punchIn } from '../class/punchIn.class';
import { ExcelService } from 'src/app/service/excel.service';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-attendence-report',
  templateUrl: './attendence-report.component.html',
  styleUrls: ['./attendence-report.component.css'],
  providers: [ReportService, ExcelService,AuthenticationService]
})
export class AttendenceReportComponent implements OnInit {

  public to: string = "";
  public from: string = "";
  public file?: File;
  public data: Array<punchIn> = [];
  public today: Date = new Date();
  public displayTable: boolean | null = null;
  eMasterDetails: any;
  empId!:string;
  empName: string = "";

  constructor(private reportService: ReportService, private excelService:ExcelService, private authService: AuthenticationService  ) { }

  ngOnInit(): void {
    this.empId =this.authService.getData(this.authService.TOKEN_KEY);
   // this.to = this.today.toISOString().slice(0, 10);
    //this.today.setDate(this.today.getDate() -1);
   // this.from = this.today.toISOString().slice(0, 10);
    // this.to ="";
    // this.from ="";
    // this.getData();
  }
  public reset() {
   this.to = "";
   this.from = ""
   this.data = [];
   this.displayTable = null;
   this.empName = "";
  }

  public getData() {
  
    if (!this.from || !this.to) {
      // alert("From date or to date missing")
      return;
    }
    if(new Date(this.from) > new Date(this.to)) {
      // alert("From date cannot be greater than to date");
      return;
    }
   this.reportService.getData(this.from, this.to, this.empId).subscribe(res=> {
      if(null !=res.data && res.data.length>0) {
        this.data = res.data;
        if(this.empName == "") {
          this.empName = this.data[0].empName;
        }
        this.displayTable = true;
      } else {
        this.displayTable = false;
      }
    })
  }

  public exportAsXLSX():void{

    if (!this.from || !this.to) {
      // alert("Testing")
      return;
    }
    var pipe = new DatePipe('en-US');
    var fileName = this.empName +" : " + "From_"+this.from + "_To_" + this.to + "-" +  pipe.transform(this.today, "YYYY-MM-dd");
    var jsondata = [];
    for(var i=0; i< this.data.length; i++) {
      var punchInDate =  pipe.transform(this.data[i].punchIn, "YYYY-MM-dd");
      var punchInTime =  pipe.transform(this.data[i].punchIn, "shortTime");
      var punchOutDate =  pipe.transform(this.data[i].punchOut, "YYYY-MM-dd");
      var punchOutTime =  pipe.transform(this.data[i].punchOut, "shortTime");
      var record = {
        "Name" : this.data[i].empName,//
        "Punch In Date" : punchInDate,
        "Punch In Time" : punchInTime,
        "Punch Out Date" : punchOutDate,
        "Punch Out Time" : punchOutTime
      }
      jsondata.push(record);
    }
    this.excelService.exportAsExcelFile(jsondata, fileName);
  }

}


