import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeHrmsDetail, EmployeeMasterDetails, EmployeePersonalDetail, EmployeeProfileDto } from 'src/app/employeeprofile-modal/models/employe-profile-entity';
import { GlobalService } from 'src/app/service/global.service';
import { PeopleService } from 'src/app/service/people.service';

export class employeeForm {
  Id: number = 0;
  name: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [GlobalService]
})
export class PeopleComponent implements OnInit {
  // editEmployeeForm: employeeForm = new employeeForm();
  // @ViewChild("employeeForm")
  // employeeForm!: NgForm;
  // isSubmitted: boolean = false;
  authService: any;
  //eMasterDetails: any;
  public ePersonalDetails: EmployeePersonalDetail = new EmployeePersonalDetail("", "", "", null, "", "", "");
  //public eHrmsDetails: EmployeeHrmsDetail = new EmployeeHrmsDetail;
  public eMasterDetails: EmployeeMasterDetails = new EmployeeMasterDetails;
 
  
   public empProfiles: EmployeeProfileDto[] = [];
   // EmployeeProfileDto : any= [];
    empProfileDto: EmployeeProfileDto ;
  eHrmsDetails: EmployeeHrmsDetail;
  constructor(
    private httpClient: HttpClient, public globalService: GlobalService,
    private peopleData:PeopleService,
  ) { 
   
    this.eHrmsDetails = new EmployeeHrmsDetail;
    this.empProfileDto=new EmployeeProfileDto(this.ePersonalDetails,this.eHrmsDetails,this.eMasterDetails);
  }

  ngOnInit(): void {
    this.getPeople();
  }
  getPeople() {
    this.peopleData.getEmployee().subscribe((resp)=>{
     this.globalService.saveEmployeeProfileResponseList(resp);
    },
    (err)=>{
      console.log(err);
    }
    );
  }
  openDetails(empId:string|undefined) {
    if (!empId) {
      alert("Invalid emp");
      return;
    }
    let empdet=this.empProfiles.find((p)=>{return p.empMasterDetails.id==empId})
    this.peopleData.viewEmployee(empId).subscribe(empdet=>{
      console.log(empdet);
    })
  }
  deletePeople(empId:string|undefined) {
    if (!empId) {
      alert("Invalid emp");
      return;
    }
      this.peopleData.deleteEmployee(empId).subscribe( data => {
        console.log(data);
        this.getPeople();
      })
      
    }
    updateDetails(empId:string|undefined){
      if (!empId) {
        alert("Invalid emp");
        return;
      }
      let empdet=this.empProfiles.find((p)=>{return p.empMasterDetails.id==empId})
     this.peopleData.updateEmployee(empId).subscribe(empdet=>{
     console.log(empdet);
})
    }
// updateDetails(empId:string|undefined){
//   if (!empId) {
//             alert("Invalid emp");
//             return;
//           }
//   console.log("Eproifledat click " + JSON.stringify(this.ePersonalDetails));
//   console.log("HRMS click " + JSON.stringify(this.eHrmsDetails));
//   console.log("MASTER click " + JSON.stringify(this.eMasterDetails));
//   this.eMasterDetails.id = this.authService.getData(this.authService.TOKEN_KEY);
//   let body = new EmployeeProfileDto(this.ePersonalDetails, this.eHrmsDetails, this.eMasterDetails);

//   this.peopleData.updateEmployee(empId).subscribe(resp => {
//     console.log(resp);
//    // alert(resp.message);
//       this.globalService.appendToEmployeeProfileList(body);
//       this.ePersonalDetails = new EmployeePersonalDetail("", "", "", 18 , "", "", "");
//       this.eHrmsDetails = new EmployeeHrmsDetail;
//       this.eMasterDetails = new EmployeeMasterDetails;
//       //this.isModalShow = true;
//      this.getPeople();
    
//   },
//     error => {
//       console.log(error);
//       alert(error.error.message);
//     });
//   }

}

  //   getEmployeeDetailById(empId:string|undefined) {
  //     if (!empId) {
  //       alert("Invalid emp");
  //       return;
  //     }
  //     this.peopleData.viewEmployee(empId).subscribe(data=>{
  //       if (data != null && (<any>data).body != null) {
  //         var resultData =(<any>data).body 
  //         if(resultData){
  //         this.ePersonalDetails.name=resultData.name;
  //         }
  //       }
  //       console.log(data);
  //     })
  //   }
  // }
function http<T>(http: any) {
  throw new Error('Function not implemented.');
}

function getPeople() {
  throw new Error('Function not implemented.');
}

