import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app-settings';
import { FinanceRecordModel } from 'src/app/models/FinanceRecordMode';
import { FinanceRetrieveModel } from 'src/app/models/FinanceRetrieveModel';

@Injectable({
  providedIn: 'root'
})
export class NewRecordsService {

  constructor(
    private appSettings: AppSettings,
    private httpClient: HttpClient
  ) { }

  public defaultAPIURLHost: string = this.appSettings.api_url;
  public options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  public newRecordsStore(FinanceRecordModel: FinanceRecordModel): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/finance_records/add";
      let body = {
        date: FinanceRecordModel.date,
        net_income: FinanceRecordModel.net_income,
        sss_contri: FinanceRecordModel.sss_contri,
        philhealth_contri: FinanceRecordModel.philhealth_contri,
        pagibig_contri: FinanceRecordModel.pagibig_contri,
        debts: FinanceRecordModel.debts,
        savings: FinanceRecordModel.savings,
        emergency_funds: FinanceRecordModel.emergency_funds,
        needs: FinanceRecordModel.needs,
        education_finance: FinanceRecordModel.education_finance
      }

      this.httpClient.post(url, body, this.options).subscribe((response) => {
        let data = response;
        observer.next([true, data]);
        observer.complete();
      }, (error) => {
        observer.next([false, error]);
        observer.complete();
      });
    });
  }

  public newRecordsIndex(): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/finance_records/list";
      
      
      this.httpClient.get(url, this.options).subscribe((response) => {
        let data = response;
        observer.next([true, data]);
        observer.complete();
      }, (error) => {
        observer.next([false, error]);
        observer.complete();
      })
    })
  }

  public newRecordsDelete(id: number): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/finance_records/delete/" + id;
      
      this.httpClient.delete(url, this.options).subscribe((response) => {
        let data = response;
        console.log(data)
        observer.next([true, data]);
        observer.complete();
      }, (error) => {
        observer.next([false, error]);
        observer.complete();
      })
    })
  }

  public newRecordsUpdate(FinanceRecordModel: FinanceRecordModel, id: any): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/finance_records/update/" + id;
      let body = {
        date: FinanceRecordModel.date,
        net_income: FinanceRecordModel.net_income,
        sss_contri: FinanceRecordModel.sss_contri,
        philhealth_contri: FinanceRecordModel.philhealth_contri,
        pagibig_contri: FinanceRecordModel.pagibig_contri,
        debts: FinanceRecordModel.debts,
        savings: FinanceRecordModel.savings,
        emergency_funds: FinanceRecordModel.emergency_funds,
        needs: FinanceRecordModel.needs,
        education_finance: FinanceRecordModel.education_finance
      }
      this.httpClient.put(url, body, this.options).subscribe((response) => {
        let data = response;
        console.log(data)
        observer.next([true, data]);
        observer.complete();
      }, (error) => {
        observer.next([false, error]);
        observer.complete();
      })
    })
  }
}
