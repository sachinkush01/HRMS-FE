import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  
  public getLeaveDetails(empId: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/'+empId+'/leave-details');
  }

  constructor(private http: HttpClient) { }

  public sendLeaveRequest(body: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/leave-request', body);
  }
}
