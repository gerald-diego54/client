import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { NewExpenseRecordsService } from 'src/app/services/new-expense-records/new-expense-records.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private newExpenseRecordService: NewExpenseRecordsService
  ) { }
  public items: MenuItem[] = [];
  public home!: MenuItem;
  public basicData: any;
  public basicOptions: any;
  public data: any;
  public chartOptions: any;
  public loading: boolean = false;
  public displayModal: boolean = false;
  public labels: any[] = [];
  public expense_amount: any[] = [];
  
  public menuItems(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
    };

    this.basicData = {
      labels: this.labels,
      datasets: [
          {
              label: 'Date of Expenditures',
              backgroundColor: '#42A5F5',
              data: this.expense_amount
          }
      ]
    };
  this.showModalDialog();
  }

  public showModalDialog() {
    this.items = [
      { label: 'Dashboard' },
    ];
    this.displayModal = true;
    if (this.displayModal == true) {
      setTimeout(() => {
        this.loading = true;
      }, 1000);
    }
    this.getLabels();
  }

  public getLabels(): void {
    this.newExpenseRecordService.newExpenseIndex().subscribe((response) => {
      console.log(response[1].data);
      for(let i = 0; i < response[1].data.length; i++){
        this.labels.push(response[1].data[i].date);
        this.expense_amount.push(response[1].data[i].expense_amount)
      }

    })
  }




  ngOnInit(): void {
    this.menuItems();
  }

}
