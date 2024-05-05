import { Component, OnInit } from '@angular/core';
import { MyInfo } from '../myinfo.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {


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
