import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';
import { NewExpenseRecordsService } from 'src/app/services/new-expense-records/new-expense-records.service';
import { ExpenseModel } from 'src/app/models/ExpenseModel';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';


@Component({
  selector: 'app-new-daily-expense',
  templateUrl: './new-daily-expense.component.html',
  styleUrls: ['./new-daily-expense.component.css'],
  providers: [DatePipe]
})
export class NewDailyExpenseComponent implements OnInit {

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private datePipe: DatePipe,
    private expensesServices: NewExpenseRecordsService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  public expenses: any;
  public monthly_salary: number = 0;
  public date: any;
  public all_expenses: any;
  public selectedExpenses: any;
  public Title: string = this.config.data.dialogTitle;
  public expenseModel: ExpenseModel = {
    date: this.datePipe.transform(new Date(), 'MM/dd/YYYY'),
    expense_name: "",
    expense_amount: 0.00
  }
  public dataSource: any[] = [];
  public loading: boolean = false;

  public buttonSave(): void {
    this.expensesServices.newExpenseStore(this.expenseModel).subscribe((response) => {
      console.log(response)
    })
  }

  public buttonCancel(): void {
    this.ref.close();
  }

  public getDataIndex(): void {
    this.expensesServices.newExpenseIndex().subscribe((response) => {
      if(response[1].data.length){
        for (let i = 0; i < response[1].data.length; i++){
          this.dataSource.push({
            id: response[1].data[i].id,
            date: response[1].data[i].date,
            expense_name: response[1].data[i].expense_name,
            expense_amount: response[1].data[i].expense_amount
          })
        }
        this.loading = true;
      } else {
        
      }


    });
  }

  public buttonDelete(id: number): void {
    // console.log(id)
    
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.expensesServices.newExpenseDelete(id).subscribe((response) => {
          console.log(response);
        })
      },
      reject: (type: any) => {
        switch (type + 1) {
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'Deletion has been cancelled' });
            break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.getDataIndex();
  }
}
