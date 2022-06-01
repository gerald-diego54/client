import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './../../../app-settings';
import { RegisterModel } from 'src/app/models/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private appSettings: AppSettings,
    private httpClient: HttpClient
  ) { }

  public defaultApiUrlHost: string = this.appSettings.api_url;
  public options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`    })
  };

  public register(registerModel: RegisterModel): Observable<[boolean, any]> {
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultApiUrlHost + "api/register";
      let body = "email=" + registerModel.email + "&password=" + registerModel.password + "&name=" + registerModel.name + "&password_confirmation=" + registerModel.confirm_password;
      // console.log(body)
      this.httpClient.post(url, body, this.options).subscribe((response) => {
        let data = response;

        observer.next([true, data]);
        observer.complete();
      }, (error) => {
        observer.next([false, error]);
        observer.complete();
      })
    })
  }
}
