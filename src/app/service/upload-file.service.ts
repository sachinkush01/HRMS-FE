import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthenticationService) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    var empId =this.authService.getData(this.authService.TOKEN_KEY);
    const req = new HttpRequest('POST', `${this.apiUrl}/uploadFile/`+empId, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    var empId =this.authService.getData(this.authService.TOKEN_KEY);
    const fullApiUrl = this.apiUrl + "/files/"+empId;
    return this.http.get(fullApiUrl);
  }

}
