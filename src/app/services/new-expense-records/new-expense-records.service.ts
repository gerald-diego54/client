import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app-settings';
import { FinanceRecordModel } from 'src/app/models/FinanceRecordMode';
import { FinanceRetrieveModel } from 'src/app/models/FinanceRetrieveModel';
import { ExpenseModel } from 'src/app/models/ExpenseModel';

@Injectable({
  providedIn: 'root'
})
export class NewExpenseRecordsService {

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

  public newExpenseStore(expenseModel: ExpenseModel): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/expense_record/add";
      let body = {
        date: expenseModel.date,
        expense_name: expenseModel.expense_name,
        expense_amount: expenseModel.expense_amount
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

  public newExpenseIndex(): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/expense_record/list";
      
      
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

  public newExpenseDelete(id: number): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/expense_record/delete/" + id;
      
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

  public newExpenseUpdate(expenseModel: ExpenseModel, id: any): Observable<[boolean, any]>{
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "api/finance_records/update/" + id;
      let body = {
        date: expenseModel.date,
        expense_name: expenseModel.expense_name,
        expense_amount: expenseModel.expense_amount
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
