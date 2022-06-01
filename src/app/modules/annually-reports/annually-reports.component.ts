import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annually-reports',
  templateUrl: './annually-reports.component.html',
  styleUrls: ['./annually-reports.component.css']
})
export class AnnuallyReportsComponent implements OnInit {

  constructor() { }

  public items: any;
  public home: any;

  ngOnInit(): void {
    this.items = [
      { label: 'Reports' },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}
