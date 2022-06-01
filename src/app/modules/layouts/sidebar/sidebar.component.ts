import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  public scrollable = true;
  public visibleSidebar1: boolean = false;
  public items: MenuItem[] = [];

  public logout(): void {
    localStorage.clear();
    location.reload();
  }


  ngOnInit(): void {
  }

}
