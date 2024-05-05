import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl: string = environment.apiUrl;
  constructor( private http : HttpClient) { }

  getAllUserDetail(){
    return this.http.get(this.apiUrl + '/getMyInfo');
  }
}
