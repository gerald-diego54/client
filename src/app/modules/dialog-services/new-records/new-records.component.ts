import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';
import { FinanceRecordModel } from 'src/app/models/FinanceRecordMode';
import { NewRecordsService } from 'src/app/services/new-records/new-records.service';
import { FinanceRetrieveModel } from 'src/app/models/FinanceRetrieveModel';

@Component({
  selector: 'app-new-records',
  templateUrl: './new-records.component.html',
  styleUrls: ['./new-records.component.css'],
  providers: [DatePipe]
})
export class NewRecordsComponent implements OnInit {
  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private datePipe: DatePipe,
    private newRecordService: NewRecordsService,
    private newRecordsService: NewRecordsService
    ) { }

  public products: any;
  public Title: string = this.config.data.dialogTitle;
  public dataSource: FinanceRetrieveModel[] = [];
  public financeRecords: FinanceRecordModel = {
    date: this.datePipe.transform(new Date(), 'MM/dd/YYYY'),
    net_income: 0,
    sss_contri: 0,
    philhealth_contri: 0,
    pagibig_contri: 0,
    debts: 0,
    savings: 0,
    emergency_funds: 0,
    needs: 0,
    education_finance: 0
  };

  // public getPersonalFinanceRecords(): void {
  //   this.newRecordsService.newRecordsIndex().subscribe((response) => {
  //     console.log(response)
  //     console.log(response[1].data)
  //     if (response[1].data.length > 0) {
  //       for (let index = 0; index < response[1].data.length; index++){

  //         this.dataSource.push({
  //           id: response[1].data[index].id,
  //           date: response[1].data[index].date,
  //           net_income: response[1].data[index].net_income,
  //           total_contributions: parseFloat(response[1].data[index].pagibig_contri) + parseFloat(response[1].data[index].philhealth_contri) + parseFloat(response[1].data[index].sss_contri),
  //           total_expenses: response[1].data[index].needs,
  //           total_savings: response[1].data[index].savings,
  //           total_debts: response[1].data[index].debts
  //         })
  //       }
  //     }
  //   });
  // }

  public buttonSave(): void {
    this.saveData();
    this.ref.close(this.dataSource);
  }

  public buttonCancel(): void {
    this.ref.close();
  }

  public saveData(): void {
    this.newRecordService.newRecordsStore(this.financeRecords).subscribe((response)=>{
      console.log(response);
    });
  }

  public renderFinanceData(): void{
    if(this.config.data.dataDialog == null){
      
    } else {
      this.financeRecords = this.config.data.dataDialog;
      console.log(this.config)
    }

  }

  ngOnInit(): void {
  // this.getPersonalFinanceRecords();
  this.renderFinanceData();
    console.log(this.financeRecords)
  }

}
