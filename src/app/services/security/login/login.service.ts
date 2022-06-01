import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/LoginModel';
import { AppSettings } from 'src/app/app-settings';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private appSettings: AppSettings
  ) { }

  public defaultApiUrlHost: string = this.appSettings.api_url;
  public options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  public login(LoginModel: LoginModel): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultApiUrlHost + "api/login";
      let body = "email=" + LoginModel.email + "&password=" + LoginModel.password;

      this.httpClient.post(url, body, this.options).subscribe((response) => {
        let data: any = response;
        console.log(data)
        if(data.status == 200){
          localStorage.setItem('token', data.message.token);
          localStorage.setItem('email', data.message.email);
          localStorage.setItem('name', data.message.name);

          observer.next([true, "Authenticated"]);
          observer.complete();
        } 
      }, (error) => {
        observer.next([false, error]);
        observer.complete();
      })
    })
  }
}
