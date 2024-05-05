import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginClass } from '../class/login.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


  public login(loginClass : LoginClass): Observable<any> {
    const fullApiUrl = this.apiUrl + "/login";
    return this.http.post<any>(fullApiUrl, loginClass);

  }
}
