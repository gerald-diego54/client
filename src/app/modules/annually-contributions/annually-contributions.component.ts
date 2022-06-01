import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annually-contributions',
  templateUrl: './annually-contributions.component.html',
  styleUrls: ['./annually-contributions.component.css']
})
export class AnnuallyContributionsComponent implements OnInit {

  constructor() { }
  public items: any;
  public home: any;
  public basicOptions: any;
  public basicData: any;

  public chartData(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
  };

  this.basicOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
  }
}

  ngOnInit(): void {
    this.items = [
      { label: 'Contributions' },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.chartData();
  }
}
