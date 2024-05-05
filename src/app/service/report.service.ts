import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  constructor(private http: HttpClient) { }

  public upload(body: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/attendance/upload', body);
  }

  public getData(fromDate: string, toDate: string, emp_id?: string): Observable<any> {
    return this.http.get("http://localhost:8080/attendance/"+fromDate+"/"+toDate+"?empId="+emp_id);
  }
}