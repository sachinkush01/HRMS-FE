import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  TOKEN_KEY: string = "id";
  TOKEN_VALUE: string = "password";
  isLogin:boolean = false;
  constructor() { 
    this.isLogin = this.getData(this.TOKEN_KEY)? true : false;
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(this.TOKEN_KEY, key);
    localStorage.setItem(this.TOKEN_VALUE, value);
    this.isLogin = true;
  }

  public getData(key: string) {
    var data =  localStorage.getItem(key);
    if(data == undefined){
      data = "";
    }
    return data;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
    this.isLogin = false;
  }

  public clearData() {
    localStorage.clear();
    this.isLogin = false;
  }
}
