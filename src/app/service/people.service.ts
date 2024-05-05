import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeProfileDto } from '../employeeprofile-modal/models/employe-profile-entity';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
  // url="http://localhost:8080/employee-profile"
  // apiUrl="http://localhost:8080/delete_employee/"
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  apiUrl: string = environment.apiUrl;
  public getEmployee(){
    return this.http.get<any>(this.apiUrl+'/employee-profile');
  }
  public deleteEmployee(empId: string):Observable<Object>{
    return this.http.get<string>(this.apiUrl+'/delete_employee/'+empId,{responseType:'text' as 'json'});
  }
  public viewEmployee(empId:string):Observable<Object>{
    return this.http.get<any>(this.apiUrl+'/employee-profile/'+empId);
  }
  public updateEmployee(empId:string): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/update-employee/'+empId,JSON.stringify(EmployeeProfileDto), this.httpOptions)
    .pipe(
      map(() => EmployeeProfileDto),
      //catchError(this.handleError)
    );
  }
}
