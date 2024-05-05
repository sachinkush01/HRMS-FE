import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class MyInfo {
  public name !: String;
  public  address !: String;
  public  emp_mail !: String;
  public  phone_num !: String;
  public  dob !: String;
  public joining_date !: String

  constructor(
  ){}

  }

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyInfoComponent implements OnInit {
 
  
  myinfo: MyInfo | null = null;
  constructor( 
     private httpClient: HttpClient
  ) { 
    this.myinfo = new MyInfo();
  }

  ngOnInit(): void {
    this.getUserinfo();
   
  }
    getUserinfo(){
      this.httpClient.get<any>('http://localhost:8080/getMyInfo/1').subscribe(response=> {
        this.myinfo=response;
        console.log("My Info " + response);
      });
        
      }
      }

      
    
  


