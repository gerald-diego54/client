import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FinanceRecordModel } from 'src/app/models/FinanceRecordMode';
import { FinanceRetrieveModel } from 'src/app/models/FinanceRetrieveModel';
import { NewRecordsService } from 'src/app/services/new-records/new-records.service';
import { NewDailyExpenseComponent } from '../dialog-services/new-daily-expense/new-daily-expense.component';
import { NewRecordsComponent } from '../dialog-services/new-records/new-records.component';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { UpdateRecordsComponent } from '../dialog-services/update-records/update-records.component';

@Component({
  selector: 'app-annual-records',
  templateUrl: './annual-records.component.html',
  styleUrls: ['./annual-records.component.css'],
  providers: [DialogService, ConfirmationService, MessageService]
})
export class AnnualRecordsComponent implements OnInit {

  constructor(
    public dialogService: DialogService,
    private newRecordsService: NewRecordsService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  public ref!: DynamicDialogRef;
  public items: MenuItem[] = [];
  public home!: MenuItem;
  public loading: boolean = false;
  public dataSource: FinanceRetrieveModel[] = [];
  public getWillUpdateData: any[] = [];


  public promptToAddDialog(): void {
    this.ref = this.dialogService.open(NewRecordsComponent, {
      showHeader: false,
      width: '70%',
      height: '80%',
      data: {
        dialogTitle: 'Create Personal Finance Records'
      },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((data) => {
      if (data) {
        console.log(data);
        if (data.length > 0 && this.dataSource.length == 0) {
          for (let i = 0; i < data.length; i++) {
            this.dataSource.push(data[i]);
            // this.getWillUpdateData.push(data[i]);
          }
          this.loading = true;
        }
      }
    })
  }

  public promptToAddDialogDailyExpenses(): void {
    this.ref = this.dialogService.open(NewDailyExpenseComponent, {
      contentStyle: 'overflow-y: hidden;',
      showHeader: false,
      width: '78%',
      height: '85%',
      header: 'Create Personal Finance Daily Expenses',
      baseZIndex: 10000,
      data: {
        dialogTitle: 'Create Expense Records'
      },
    });

    this.ref.onClose.subscribe((data) => {
      if (data) {
      }
    })
  }

  public getPersonalFinanceRecords(): void {
    this.newRecordsService.newRecordsIndex().subscribe((response) => {
      console.log(response)
      if (response[1].data.length > 0) {
        for (let index = 0; index < response[1].data.length; index++) {
          this.dataSource.push({
            id: response[1].data[index].id,
            date: response[1].data[index].date,
            net_income: response[1].data[index].net_income,
            total_contributions: parseFloat(response[1].data[index].pagibig_contri) + parseFloat(response[1].data[index].philhealth_contri) + parseFloat(response[1].data[index].sss_contri),
            total_expenses: response[1].data[index].needs,
            total_savings: response[1].data[index].savings,
            total_debts: response[1].data[index].debts
          })
        }
        this.loading = true;
        this.getWillUpdateData.push(response[1].data)
      } else {
        this.loading = response[0];
      }
    });
  }

  public deleteFinance(id: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.newRecordsService.newRecordsDelete(id).subscribe(() => {
          this.loading = true;
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record successfully deleted' });
        });
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

  public updateFinance(id: any): void {
    let data: any;
    for(let i = 0; i < this.getWillUpdateData[0].length; i++) {
      if(this.getWillUpdateData[0][i].id == id){
        console.log(this.getWillUpdateData[0][i], id)
        data = this.getWillUpdateData[0][i];
      }
    }
    this.ref = this.dialogService.open(UpdateRecordsComponent, {
      data: {
        dataDialog: data,
        dialogTitle: 'Update Finance Records',
      },
      showHeader: false,
      width: '70%',
      height: '80%',
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((response) => {
      this.newRecordsService.newRecordsUpdate(response, id).subscribe((response)=> {
        console.log(response);
      })
      // console.log(response)
    })
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Records' },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.getPersonalFinanceRecords();
  }
}
