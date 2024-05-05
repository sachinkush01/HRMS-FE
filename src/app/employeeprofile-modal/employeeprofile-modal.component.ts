import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from "../service/EmployeeService";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeHrmsDetail, EmployeeMasterDetails, EmployeePersonalDetail, EmployeeProfileDto } from './models/employe-profile-entity';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-employeeprofile-modal',
  templateUrl: './employeeprofile-modal.component.html',
  styleUrls: ['./employeeprofile-modal.component.css'],
  providers: [EmployeeService, GlobalService]

})
export class EmployeeprofileModalComponent implements OnInit {
  public role: any;
  public ePersonalDetails: EmployeePersonalDetail = new EmployeePersonalDetail("", "", "", null, "", "", "");
  public eHrmsDetails: EmployeeHrmsDetail = new EmployeeHrmsDetail;
  public eMasterDetails: EmployeeMasterDetails = new EmployeeMasterDetails;
  public isModalShow: boolean = false;

  constructor(private empService: EmployeeService, private authService: AuthenticationService, private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  eprofiledata() {
    console.log("Eproifledat click " + JSON.stringify(this.ePersonalDetails));
    console.log("HRMS click " + JSON.stringify(this.eHrmsDetails));
    console.log("MASTER click " + JSON.stringify(this.eMasterDetails));
    this.eMasterDetails.id = this.authService.getData(this.authService.TOKEN_KEY);
    let body = new EmployeeProfileDto(this.ePersonalDetails, this.eHrmsDetails, this.eMasterDetails);
    if(isValidRequest(body)) {
    this.empService.sendEmployeeDetails(body).subscribe(resp => {
      console.log(resp);
     // alert(resp.message);
      if (resp.code == 200) {
        this.globalService.appendToEmployeeProfileList(body);
        this.ePersonalDetails = new EmployeePersonalDetail("", "", "", 18 , "", "", "");
        this.eHrmsDetails = new EmployeeHrmsDetail;
        this.eMasterDetails = new EmployeeMasterDetails;
        this.isModalShow = true;
        window.location.reload();
      }
    },
      error => {
        console.log(error);
        alert(error.error.message);
      });
    }
}
   } 

//constructor(empPersonalDetails:EmployeePersonalDetail, empHrmsDetails:EmployeeHrmsDetail, empMasterDetails:EmployeeMasterDetails)
function isValidRequest(body: any): boolean {
  if(body.empPersonalDetails.age! < 18) {
    alert("Allowed minimum age is 18");
    return false;
  } else  if(body.empPersonalDetails.age! > 55) {
    alert("Allowed maximum age is 55");
    return false;
  }
  return true;
}

