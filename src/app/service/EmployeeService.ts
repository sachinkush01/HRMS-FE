import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeProfileDto } from '../employeeprofile-modal/models/employe-profile-entity';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public sendEmployeeDetails(body: EmployeeProfileDto): Observable<any> {
    return this.http.post<any>('http://localhost:8080/employee-profile', body);
  }

  
}
