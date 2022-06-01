import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.route.params.subscribe(params => {
      // console.log(params['main'])
    });
  }

}
