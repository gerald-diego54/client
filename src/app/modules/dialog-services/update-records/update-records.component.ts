import { Component, OnInit } from '@angular/core';
import { FinanceRecordModel } from 'src/app/models/FinanceRecordMode';
import { FinanceRetrieveModel } from 'src/app/models/FinanceRetrieveModel';
import { DatePipe } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update-records',
  templateUrl: './update-records.component.html',
  styleUrls: ['./update-records.component.css'],
  providers: [DatePipe]

})
export class UpdateRecordsComponent implements OnInit {

  constructor(
    public datePipe: DatePipe,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { }

  public products: any;
  public Title: string = this.config.data.dialogTitle;
  public dataSource: FinanceRetrieveModel[] = [];
  public financeRecords: FinanceRecordModel = {
    date: this.config.data.dataDialog.date,
    net_income: this.config.data.dataDialog.net_income,
    sss_contri: this.config.data.dataDialog.sss_contri,
    philhealth_contri: this.config.data.dataDialog.philhealth_contri,
    pagibig_contri: this.config.data.dataDialog.pagibig_contri,
    debts: this.config.data.dataDialog.debts,
    savings: this.config.data.dataDialog.savings,
    emergency_funds: this.config.data.dataDialog.emergency_funds,
    needs: this.config.data.dataDialog.needs,
    education_finance: this.config.data.dataDialog.education_finance
  };

  public buttonSave(): void {
    this.ref.close(this.financeRecords);
  }

  public buttonCancel(): void {
    this.ref.close();
  }

  ngOnInit(): void {
  }

}
